import { ProfileHeader } from "../../components/profile/ProfileHeader";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import { Card, Container } from "react-bootstrap";

import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Loader from "../../components/Loader";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Profile.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

function ProfilePage() {
  const currentUser = useCurrentUser();
  const { id } = useParams();

  const [hasLoaded, setHasLoaded] = useState(false);
  const [experiences, setExperiences] = useState({ results: [] });

  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: experiences }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/experiences/?profile=${id}&ordering=-is_current&`),
          ]);

        setExperiences(experiences);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (
          <>
            <ProfileHeader profile={profile} />
            {experiences.results.length ? (
              <Card className={`p-1 ${styles.Experience}`}>
                <Container className="mb-2">
                  <h3>Experiences:</h3>
                  {experiences.results.map((experience) => (
                    <>
                      <h4>
                        {experience.date_from} •
                        {experience.is_current ? " now" : experience.date_to}
                      </h4>
                      <h4>
                        {experience.title} at {experience.company_name}
                      </h4>
                      <p>{experience.description}</p>
                      {experience.recommendations_count && (
                        <>
                          <span
                            className={`d-flex justify-content-center ${appStyles.Info}`}
                          >
                            <Link to={`/experiences/${experience.id}`}>
                              {experience.recommendations_count} Recommendations
                            </Link>
                          </span>
                        </>
                      )}
                      <hr className="w-50 align-self-center" />
                    </>
                  ))}
                </Container>
              </Card>
            ) : (
              <></>
            )}
          </>
        ) : (
          <Card className="card p-4">
            <Loader />
          </Card>
        )}
      </Col>
    </Row>
  );
}

export default ProfilePage;
