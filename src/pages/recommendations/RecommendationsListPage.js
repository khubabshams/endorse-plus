import React, { useEffect, useState } from "react";
import styles from "../../styles/RecommendationsListPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Recommendation from "../../components/recommendation/Recommendation";
import { Col, Row } from "react-bootstrap";
import Loader from "../../components/Loader";

const RecommendationsListPage = ({ filter = "" }) => {
  const [recommendations, setRecommendations] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        
        const { data } = await axiosReq.get(`/recommendations/?${filter}`);
        console.log("insiiiiide",data);
        setRecommendations(data);
        setHasLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    setHasLoaded(false);
    fetchRecommendations();
  }, [filter]);

  return (
    <>
      {hasLoaded ? (
        <>
          <Row>
            <Col>
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
            </Col>
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default RecommendationsListPage;
