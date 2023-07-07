import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import ExperienceForm from "./ExperienceForm";
import Container from "react-bootstrap/Container";
import moment from "moment/moment";

const ExperienceCreateEditForm = (props) => {
  const currentUser = useCurrentUser();

  const [experienceData, setExperienceData] = useState({
    id: props?.id,
    title: props?.title,
    company: props?.company,
    company_name: props?.company_name,
    date_from: props?.date_from,
    date_to: props?.date_to,
    description: props?.description,
    is_current: props?.is_current,
  });

  const [companies, setCompanies] = useState([]);
  const [errors, setErrors] = useState({});

  const {
    title,
    date_from,
    date_to,
    description,
    company_name,
    company,
    is_current,
  } = experienceData;

  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        const { data: companiesData } = await axiosReq.get(`/companies/`);
        setCompanies(companiesData.results);
      } catch (err) {
        // console.log(err);
      }
    };

    fetchCompaniesData();
  }, []);

  const handleFlagChange = (event) => {
    setExperienceData({
      ...experienceData,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChange = (event) => {
    const target = event.target;
    const targ_name = target.name;
    let values = { [targ_name]: target.value };

    if (targ_name === "company") {
      const comp_name =
        target.childNodes[target.selectedIndex].getAttribute("company_name");
      values = { ...values, company_name: comp_name };
    }

    setExperienceData({
      ...experienceData,
      ...values,
    });
  };

  const onSubmitSucces = (experience) => {
    props.updateExperiences({
      id: props.id || experience.id,
      title: title,
      company: company,
      company_name: company_name,
      date_from: date_from,
      date_to: date_to,
      description: description,
      is_current: is_current,
    });
    props.setEditMode(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("profile", Number(currentUser?.profile_id));
    formData.append("title", title);
    formData.append("company", Number(company));
    formData.append("date_from", moment(date_from).format("YYYY-MM-DD"));

    !is_current &&
      formData.append("date_to", moment(date_to).format("YYYY-MM-DD"));
    const current =
      props?.createExperience && typeof is_current !== "boolean"
        ? false
        : is_current;
    formData.append("is_current", current);
    formData.append("description", description);

    try {
      const { data: experience } = props?.createExperience
        ? await axiosReq.post("/experiences/", formData)
        : await axiosReq.put(`/experiences/${props.id}/`, formData);
      onSubmitSucces(experience);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container className={`bg-white pt-3`}>
      <ExperienceForm
        {...experienceData}
        {...{
          handleSubmit,
          errors,
          company,
          handleChange,
          handleFlagChange,
          companies,
        }}
      />
    </Container>
  );
};

export default ExperienceCreateEditForm;
