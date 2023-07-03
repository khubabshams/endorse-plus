import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import RecommendationRequest from "../../components/requests/RecommendationRequest";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const RequestPage = () => {
  const { id } = useParams();
  const [request, setRequests] = useState({ results: [] });
  const history = useHistory();
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data: request } = await axiosReq(`/requests/${id}`);
        if (
          ![request?.profile, request?.receiver].includes(
            currentUser?.profile_id
          )
        ) {
          history.push("/un-authorised");
        }
        setRequests({ results: [request] });
      } catch (err) {
        if (err.response?.status === 404) {
          history.push("/not-found");
        }
      }
    };

    handleMount();
  }, [id]);

  return (
    <>
      <RecommendationRequest
        {...request.results[0]}
        setRequests={setRequests}
      />
    </>
  );
};

export default RequestPage;
