import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/RecommendationCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const RecoommendationCreateForm = () => {
  const currentUser = useCurrentUser();
  const { receiver_id } = useParams();

  const [recommendationData, setRecommendationData] = useState({
    receiver: "",
    content: "",
    related_experience: "",
    relation: "",
  });
  const [relations, setRelations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [receiverData, setReceiverData] = useState({});

  const { content, related_experience, relation } = recommendationData;

  const [errors, setErrors] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchRecommendationData = async () => {
      try {
        let company;

        const [{ data: relationsData }, { data: receiver }] = await Promise.all(
          [
            axiosReq.get(`/relationships/`),
            axiosReq.get(`/profiles/${receiver_id}`),
          ]
        );

        receiver?.experiences.map(async (experience_id) => {
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
        setReceiverData(receiver);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecommendationData();
  }, []);

  const handleChange = (event) => {
    setRecommendationData({
      ...recommendationData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    const experience_id =
      related_experience > 0 ? Number(related_experience) : null;

    formData.append("profile", currentUser?.profile_id);
    formData.append("receiver", receiverData?.id);
    formData.append("content", content);
    formData.append("related_experience", experience_id);
    formData.append("relation", relation);

    try {
      const { recommendation } = await axiosReq.post(
        "/recommendations/",
        formData
      );
      history.push(`/recommendations/${recommendation.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <Form.Group controlId="receiver">
          <Form.Label>Recommendee</Form.Label>
          <Form.Control
            type="text"
            name="receiver"
            defaultValue={receiverData.owner}
            disabled
          />
        </Form.Group>
        {errors.receiver?.map((message, idx) => (
          <Alert className={appStyles.Alert} variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="related_experience">
          <Form.Label>Recommended experience</Form.Label>
          <Form.Control
            as="select"
            name="related_experience"
            value={related_experience}
            onChange={handleChange}
            required
          >
            <option></option>
            {experiences.map((experience) => (
              <option value={experience.id} key={experience.id}>
                {experience.title} at {experience.company.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {errors.related_experience?.map((message, idx) => (
          <Alert className={appStyles.Alert} variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="relation">
          <Form.Label>Your position related to the recommendee</Form.Label>
          <Form.Control
            as="select"
            name="relation"
            value={relation}
            onChange={handleChange}
          >
            <option></option>
            {relations.map((rel) => (
              <option value={rel.id} key={rel.id}>
                {rel.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {errors.relation?.map((message, idx) => (
          <Alert className={appStyles.Alert} variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="content"
            value={content}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {errors.content?.map((message, idx) => (
          <Alert className={appStyles.Alert} variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Button className={`${btnStyles.Button}`} type="submit">
          Recommend
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert
            className={`${appStyles.Alert} mt-3`}
            variant="warning"
            key={idx}
          >
            {message}
          </Alert>
        ))}
        {errors.detail ? (
          <Alert
            className={`${appStyles.Alert} mt-3`}
            variant="warning"
          >
            {errors.detail}
          </Alert>
        ) : (
          <></>
        )}
      </Form>
    </Container>
  );
};

export default RecoommendationCreateForm;
