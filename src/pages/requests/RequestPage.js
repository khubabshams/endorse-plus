import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import RecommendationRequest from "../../components/requests/RecommendationRequest";

const RequestPage = () => {
  const { id } = useParams();
  const [request, setRequests] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data: request } = await axiosReq(`/requests/${id}`);
        setRequests({ results: [request] });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <>
      <RecommendationRequest {...request.results[0]} setRequests={setRequests} />
    </>
  );
};

export default RequestPage;
