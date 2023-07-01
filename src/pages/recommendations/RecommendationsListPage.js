import React, { useEffect, useState } from "react";
import styles from "../../styles/RecommendationsListPage.module.css";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Recommendation from "../../components/recommendation/Recommendation";
import { Col, Form, Row } from "react-bootstrap";
import Loader from "../../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

const RecommendationsListPage = ({ filter = "" }) => {
  const [recommendations, setRecommendations] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const { data } = await axiosReq.get(
          `/recommendations/?${filter}search=${query}`
        );

        setRecommendations(data);
        setHasLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchRecommendations();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query]);

  return (
    <>
      <Row>
        <Col>
          <i className={`fas fa-search position-absolute text-muted ${appStyles.SearchIcon}`}></i>
          <Form onSubmit={(event) => event.preventDefault()}>
            <Form.Control
              type="text"
              className={`mr-sm-2 ${appStyles.SearchBar}`}
              placeholder="Search Recommendations"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </Form>
          {hasLoaded ? (
            <>
              {recommendations.results.length ? (
                <InfiniteScroll
                  children={recommendations.results.map((recommendation) => (
                    <Recommendation
                      key={recommendation.id}
                      {...recommendation}
                      setRecommendations={setRecommendations}
                    />
                  ))}
                  dataLength={recommendations.results.length}
                  loader={<Loader />}
                  hasMore={!!recommendations.next}
                  next={() =>
                    fetchMoreData(recommendations, setRecommendations)
                  }
                />
              ) : (
                <div className={appStyles.NoResults}>No Results Found</div>
              )}
            </>
          ) : (
            <Loader />
          )}
        </Col>
      </Row>
    </>
  );
};

export default RecommendationsListPage;
