import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import RecommendationForm from "./RecommendationForm";
import { Container } from "react-bootstrap";
import styles from "../../styles/RecommendationCreateEditForm.module.css";

const RecommendationCreateEditForm = (props) => {
  const currentUser = useCurrentUser();

  const [recommendationData, setRecommendationData] = useState({
    receiver: props?.receiver,
    content: props?.content,
    related_experience: props?.related_experience,
    relation: props?.relation,
  });

  const [relations, setRelations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [receiverData, setReceiverData] = useState({});
  const [errors, setErrors] = useState({});

  const { receiver_id } = useParams();
  const { receiver, content, related_experience, relation } =
    recommendationData;

  const history = useHistory();

  useEffect(() => {
    const fetchRecommendationData = async () => {
      try {
        let company;
        const [{ data: relationsData }, { data: receiverData }] =
          await Promise.all([
            axiosReq.get(`/relationships/`),
            axiosReq.get(`/profiles/${receiver ? receiver : receiver_id}`),
          ]);

        receiverData?.experiences.map(async (experience_id) => {
          await Promise.all(
            [`/experiences/${experience_id}`].map((url) =>
              axiosReq.get(url).then(async (res) => {
                company = await axiosReq.get(`/companies/${res?.data.company}`);

                setExperiences((prevState) => [
                  ...prevState,
                  { ...res?.data, company: company?.data },
                ]);
              })
            )
          );
        });

        setRelations(relationsData.results);
        setReceiverData(receiverData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecommendationData();
  }, [receiver, receiver_id]);

  const handleChange = (event) => {
    setRecommendationData({
      ...recommendationData,
      [event.target.name]: event.target.value,
    });
    if (["related_experience", "relation"].includes(event.target.name)) {
      const name =
        event.target.childNodes[event.target.selectedIndex].getAttribute(
          "name"
        );
      const updatedValue =
        event.target.name === "related_experience"
          ? { company_name: name }
          : { relation_name: name };
      props.updateRecommendation && props.updateRecommendation(updatedValue);
    }
  };

  const onSubmitSucces = (recommendation) => {
    if (props?.edit) {
      props.updateRecommendation({
        content: content,
        related_experience: related_experience,
        relation: relation,
      });
      props.setEditMode(false);
    } else {
      history.push(`/recommendations/${recommendation.id}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("profile", Number(currentUser?.profile_id));
    formData.append("receiver", receiver ? receiver : receiver_id);
    formData.append("content", content);
    formData.append("related_experience", related_experience);
    relation && formData.append("relation", relation);

    try {
      const { data: recommendation } = !props?.edit
        ? await axiosReq.post("/recommendations/", formData)
        : await axiosReq.put(`/recommendations/${props.id}`, formData);
      onSubmitSucces(recommendation);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container className={`bg-white pt-3`}>
      <RecommendationForm
        {...{
          handleSubmit,
          receiverName: receiverData.name,
          errors,
          related_experience,
          handleChange,
          experiences,
          relation,
          relations,
          content,
          edit: props?.edit,
        }}
      />
    </Container>
  );
};

export default RecommendationCreateEditForm;
