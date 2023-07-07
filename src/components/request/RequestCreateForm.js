import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import RequestForm from "./RequestForm";
import { Container } from "react-bootstrap";
import { useRedirect } from "../../hooks/useRedirect";

const RequestCreateForm = (props) => {
  useRedirect("loggedOut");

  const currentUser = useCurrentUser();

  const [requestData, setRequestData] = useState({
    receiver: props?.receiver,
    message: props?.message,
  });

  const [receiverData, setReceiverData] = useState({});
  const [errors, setErrors] = useState({});

  const { receiver_id } = useParams();
  const { receiver, message } = requestData;

  const history = useHistory();

  useEffect(() => {
    const fetchRquestData = async () => {
      try {
        const { data: receiverData } = await axiosReq.get(
          `/profiles/${receiver ? receiver : receiver_id}/`
        );
        setReceiverData(receiverData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRquestData();
  }, [receiver, receiver_id]);

  const handleChange = (event) => {
    setRequestData({
      ...requestData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitSucces = (request) => {
    if (props?.edit) {
      props.updateRequest({
        message: message,
      });
      props.setEditMode(false);
    } else {
      history.push(`/requests/${request.id}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("profile", Number(currentUser?.profile_id));
    formData.append("receiver", receiver ? receiver : receiver_id);
    formData.append("message", message);

    try {
      const { data: request } = !props?.edit
        ? await axiosReq.post("/requests/", formData)
        : await axiosReq.put(`/requests/${props.id}/`, formData);
      onSubmitSucces(request);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container className={`bg-white pt-3`}>
      <RequestForm
        {...{
          handleSubmit,
          receiverName: receiverData.name,
          errors,
          handleChange,
          message,
          edit: props?.edit,
        }}
      />
    </Container>
  );
};

export default RequestCreateForm;
