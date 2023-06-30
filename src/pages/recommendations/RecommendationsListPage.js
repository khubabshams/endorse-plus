import React, { useEffect, useState } from "react";
import styles from "../../styles/RecommendationsListPage.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Recommendation from "../../components/Recommendation";
import { Col, Row } from "react-bootstrap";
import Loader from "../../components/Loader";

const RecommendationsListPage = ({ filter = "" }) => {
  const [recommendations, setRecommendations] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const { data } = await axiosReq.get(`/recommendations/?${filter}`);
        setRecommendations(data);
        setHasLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    setHasLoaded(false);
    fetchRecommendations();
  }, [filter, pathname]);

  return (
    <Row>
      <Col xs={12} md={10}>
        {hasLoaded ? (
          <>
            {recommendations.results.length ? (
              recommendations.results.map((recommendation) => (
                <Recommendation
                  key={recommendation.id}
                  {...recommendation}
                  setRecommendations={setRecommendations}
                />
              ))
            ) : (
              <div>No Results Found</div>
            )}
          </>
        ) : (
          <Loader />
        )}
      </Col>
    </Row>
  );
};

export default RecommendationsListPage;
