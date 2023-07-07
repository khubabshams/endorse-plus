import React from "react";
import { Col, Row, Tab, Nav } from "react-bootstrap";
import RequestsListPage from "./RequestsListPage";
import { useRedirect } from "../../hooks/useRedirect";

const RequestsRouter = ({ profile_id }) => {
  useRedirect("loggedOut");

  return (
    <Row>
      <Col>
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
                  <RequestsListPage
                    profile_id={profile_id}
                    filter={`receiver=${profile_id}&ordering=-seen&`}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="sent">
                  <RequestsListPage
                    profile_id={profile_id}
                    filter={`profile=${profile_id}&ordering=-created_at&`}
                  />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Col>
    </Row>
  );
};

export default RequestsRouter;
