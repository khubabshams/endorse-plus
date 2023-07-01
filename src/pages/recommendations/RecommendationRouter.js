import React from "react";
import { Col, Row, Tab, Nav } from "react-bootstrap";
import RecommendationsListPage from "./RecommendationsListPage";

const RecommendationRouter = ({ profile_id }) => {
  return (
    <>
      <Row>
        <Col xs={12} md={10}>
          <Tab.Container defaultActiveKey="received">
            <Nav variant="pills" className="justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="received">
                  <i className="fa-solid fa-download"></i>Received
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sent">
                  <i className="fa-solid fa-upload"></i>Sent
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={10}>
          <Tab.Content>
            <Tab.Pane eventKey="received">
              <RecommendationsListPage
                filter={`receiver=${profile_id}&ordering=-created_at&`}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="sent">
              <RecommendationsListPage
                filter={`profile=${profile_id}&ordering=-created_at&`}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </>
  );
};

export default RecommendationRouter;
