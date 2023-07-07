import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import RecommendationsListPage from "./RecommendationsListPage";
import TopEndorsedProfiles from "../../components/TopEndorsedProfiles";

const RecommendationRouter = ({ profile_id, profile = false }) => {
  return (
    <Row>
      <Col xs={12} md={9}>
        {!profile && <TopEndorsedProfiles mobile />}

        {profile_id ? (
          <Tab.Container defaultActiveKey="received">
            <Row>
              <Col>
                <Nav variant="tabs" fill className="bg-white mb-2">
                  <Nav.Item>
                    <Nav.Link eventKey="received">
                      <i className="fa-solid fa-download"></i> Received
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sent">
                      <i className="fa-solid fa-upload"></i> Sent
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col>
                <Tab.Content>
                  <Tab.Pane eventKey="received">
                    <RecommendationsListPage
                      filter={`receiver=${profile_id}&ordering=-is_featured&`}
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
          </Tab.Container>
        ) : (
          <RecommendationsListPage filter={`ordering=-created_at&`} />
        )}
      </Col>

      <Col md={3} className="d-none d-md-block">
        {!profile && <TopEndorsedProfiles />}
      </Col>
    </Row>
  );
};

export default RecommendationRouter;
