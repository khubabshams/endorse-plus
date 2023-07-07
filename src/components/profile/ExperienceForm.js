import React from "react";
import Form from "react-bootstrap/Form";
import CustomAlert from "../CustomAlert";

const ExperienceForm = ({
  title,
  date_from,
  date_to,
  description,
  company,
  is_current,
  handleSubmit,
  errors,
  handleChange,
  handleFlagChange,
  companies,
}) => {
  return (
    <Form onSubmit={handleSubmit} id="experienceCreateEditForm">
      <Form.Group controlId="date_from">
        <Form.Label>From</Form.Label>
        <Form.Control
          type="date"
          name="date_from"
          value={date_from}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <CustomAlert error={errors.date_from} />

      <Form.Group controlId="is_current">
        <Form.Label>Current?</Form.Label>
        <Form.Check
          name="is_current"
          defaultChecked={is_current}
          value={is_current}
          onChange={handleFlagChange}
        />
      </Form.Group>
      <CustomAlert error={errors.is_current} />

      {!is_current && (
        <>
          <Form.Group controlId="date_to">
            <Form.Label>To</Form.Label>
            <Form.Control
              type="date"
              name="date_to"
              value={date_to}
              onChange={handleChange}
            />
          </Form.Group>
          <CustomAlert error={errors.date_to} />
        </>
      )}

      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <CustomAlert error={errors.title} />

      <Form.Group controlId="company">
        <Form.Label>Company</Form.Label>
        <Form.Control
          as="select"
          name="company"
          value={company}
          onChange={handleChange}
          required
        >
          <option></option>
          {companies.map((company) => (
            <option value={company.id} key={company.id} name={company.name}>
              {company.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <CustomAlert error={errors.company} />

      <Form.Group controlId="description">
        <Form.Label>Duties</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      <CustomAlert error={errors.description} />

      <CustomAlert error={errors.non_field_errors} />
      <CustomAlert error={errors.detail} detail={true} />
    </Form>
  );
};

export default ExperienceForm;
