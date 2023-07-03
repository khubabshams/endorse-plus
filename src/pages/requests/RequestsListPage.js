import React, { useEffect, useState } from "react";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import RecommendationRequest from "../../components/request/RecommendationRequest";
import { Col, Form, Row } from "react-bootstrap";
import Loader from "../../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useHistory } from "react-router-dom";

const RequestsListPage = ({ filter = "", profile_id }) => {
  const [requests, setRequests] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        if (profile_id) {
          const { data } = await axiosReq.get(
            `/requests/?${filter}search=${query}`
          );
          setRequests(data);
          setHasLoaded(true);
        } else {
          history.push("/un-authorised");
        }
      } catch (error) {
        console.log(error);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchRequests();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, profile_id, query]);

  return (
    <>
      <Row>
        <Col>
          <i
            className={`fas fa-search position-absolute text-muted ${appStyles.SearchIcon}`}
          ></i>
          <Form onSubmit={(event) => event.preventDefault()}>
            <Form.Control
              type="text"
              className={`mr-sm-2 ${appStyles.SearchBar}`}
              placeholder="Search Requests"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </Form>
          {hasLoaded ? (
            <>
              {requests.results.length ? (
                <InfiniteScroll
                  children={requests.results.map((request) => (
                    <RecommendationRequest
                      key={request.id}
                      {...request}
                      setRequests={setRequests}
                    />
                  ))}
                  dataLength={requests.results.length}
                  loader={<Loader />}
                  hasMore={!!requests.next}
                  next={() => fetchMoreData(requests, setRequests)}
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

export default RequestsListPage;
