import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import RequestFooter from "./RequestFooter";
import { RequestHeader } from "./RequestHeader";
import { RequestContent } from "./RequestContent";

const RecommendationRequest = (props) => {
  const currentUser = useCurrentUser();
  const history = useHistory();

  const {
    created_at,
    seen,
    message,
    id,
    is_owner,
    profile,
    profile_name,
    receiver_name,
    receiver_image,
    profile_image,
    profile_title,
    receiver_title,
    receiver,
    setRequests,
  } = props;

  const isReceiver = currentUser?.profile_id === receiver;

  const updateRequest = (updatedData) => {
    setRequests((prevRequests) => ({
      ...prevRequests,
      results: prevRequests.results.map((request) => {
        return request.id === id
          ? {
              ...request,
              ...updatedData,
            }
          : request;
      }),
    }));
  };

  const handleDelete = async () => {
    if (is_owner) {
      if (window.confirm("Are you sure you want to withdraw this request?")) {
        try {
          await axiosRes.delete(`/requests/${id}`);
          history.goBack();
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const changeSeen = async (seen) => {
    if (currentUser?.profile_id === receiver) {
      try {
        await axiosRes.put(`/requests/seen/${id}`, {
          seen: seen,
        });
        updateRequest({ seen: seen });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSeen = () => {
    changeSeen(true);
  };

  const handleUnSeen = () => {
    changeSeen(false);
  };

  return (
    <Card className="rounded-0 mt-2">
      <RequestHeader
        profile={profile}
        profile_image={profile_image}
        profile_name={profile_name}
        profile_title={profile_title}
        date={created_at}
        is_owner={is_owner}
        handleDelete={handleDelete}
      />
      <hr />
      <Card.Body>
        <RequestContent
          id={id}
          message={message}
          receiver={receiver}
          receiver_image={receiver_image}
          receiver_name={receiver_name}
          receiver_title={receiver_title}
        />
      </Card.Body>
      <hr />
      <RequestFooter
        isReceiver={isReceiver}
        seen={seen}
        handleUnSeen={handleUnSeen}
        handleSeen={handleSeen}
      />
    </Card>
  );
};

export default RecommendationRequest;
