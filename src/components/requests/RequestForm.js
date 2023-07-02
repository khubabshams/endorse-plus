import React from "react";
import { Button, Form } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import CustomAlert from "../CustomAlert";

const RequestForm = ({
  handleSubmit,
  receiverName,
  errors,
  related_experience,
  handleChange,
  experiences,
  relation,
  relations,
  content,
  edit,
}) => {
  return (
    <Form onSubmit={handleSubmit} id="recommendationCreateEditForm">
      <Form.Group controlId="receiver">
        <Form.Label>Recommendee</Form.Label>
        <Form.Control
          type="text"
          name="receiver_name"
          defaultValue={receiverName}
          disabled
        />
      </Form.Group>
      <CustomAlert error={errors.receiver} />

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
            <option
              value={experience.id}
              key={experience.id}
              name={experience.company.name}
            >
              {experience.title} at {experience.company.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <CustomAlert error={errors.related_experience} />

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
            <option value={rel.id} key={rel.id} name={rel.name}>
              {rel.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <CustomAlert error={errors.relation} />

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
      <CustomAlert error={errors.content} />

      {edit ? (
        <></>
      ) : (
        <Button
          variant="secondary"
          className={`${btnStyles.Button} mb-2`}
          type="submit"
        >
          Recommend
        </Button>
      )}
      <CustomAlert error={errors.non_field_errors} />
      <CustomAlert error={errors.detail} detail={true} />
    </Form>
  );
};

export default RequestForm;
