import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Recommendation from "../../components/recommendation/Recommendation";

const RecommendationPage = () => {
  const { id } = useParams();
  const [recommendation, setRecommendations] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data: recommendation } = await axiosReq(
          `/recommendations/${id}`
        );
        setRecommendations({ results: [recommendation] });
      } catch (err) {
        console.log(err);
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
