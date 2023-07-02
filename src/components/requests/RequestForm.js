import React from "react";
import { Button, Form } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import CustomAlert from "../CustomAlert";

const RequestForm = ({
  handleSubmit,
  receiverName,
  errors,
  handleChange,
  message,
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
      
      <Form.Group controlId="message">
        <Form.Label>Personal Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={message}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <CustomAlert error={errors.message} />

      {edit ? (
        <></>
      ) : (
        <Button
          variant="secondary"
          className={`${btnStyles.Button} mb-2`}
          type="submit"
        >
          Request
        </Button>
      )}
      <CustomAlert error={errors.non_field_errors} />
      <CustomAlert error={errors.detail} detail={true} />
    </Form>
  );
};

export default RequestForm;
