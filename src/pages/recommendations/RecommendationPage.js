import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Recommendation from "../../components/recommendation/Recommendation";

const RecommendationPage = () => {
  const { id } = useParams();
  const [recommendation, setRecommendations] = useState({ results: [] });
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data: recommendation } = await axiosReq(
          `/recommendations/${id}`
        );
        setRecommendations({ results: [recommendation] });
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
      <Recommendation
        {...recommendation.results[0]}
        setRecommendations={setRecommendations}
      />
    </>
  );
};

export default RecommendationPage;
