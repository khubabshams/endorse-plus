import { ProfileHeader } from "../../components/profile/ProfileHeader";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import { Button, Card, Container } from "react-bootstrap";

import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Loader from "../../components/Loader";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Profile.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import appStyles from "../../App.module.css";
import RecommendationRouter from "../recommendations/RecommendationRouter";
import Experience from "../../components/profile/Experience";
import ExperienceCreateEditForm from "../../components/profile/ExperienceCreateEditForm";

function ProfilePage() {
  const currentUser = useCurrentUser();
  const { id } = useParams();

  const [hasLoaded, setHasLoaded] = useState(false);
  const [createExperience, handleCreateExperience] = useState(false);
  const [experiences, setExperiences] = useState({ results: [] });

  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.profile_id === Number(id);

  useEffect(() => {
    const fetchData = async () => {
      console.log(is_owner);
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
                <div className={appStyles.CardHeader}>
                  <h3>Experiences:</h3>
                  {is_owner &&
                    (createExperience ? (
                      <span>
                        <Button
                          variant="secondary"
                          onClick={() => handleCreateExperience(false)}
                          className={`fa-solid fa-arrow-left ${btnStyles.Button} ${btnStyles.Option}`}
                        ></Button>
                        <Button
                          variant="secondary"
                          form="experienceCreateEditForm"
                          type="submit"
                          className={`fa-solid fa-floppy-disk ${btnStyles.Button} ${btnStyles.Option}`}
                        ></Button>
                      </span>
                    ) : (
                      <Button
                        variant="secondary"
                        onClick={() => handleCreateExperience(true)}
                        className={`fa-solid fa-plus ${btnStyles.Button} ${btnStyles.Option}`}
                      ></Button>
                    ))}
                </div>
                {!createExperience ? (
                  experiences.results.map((experience) => (
                    <Experience
                      key={experience.id}
                      {...experience}
                      setExperiences={setExperiences}
                    />
                  ))
                ) : (
                  <Experience new={true} setExperiences={setExperiences} />
                )}
              </Card>
            ) : (
              <></>
            )}
            <div className="mt-2">
              <RecommendationRouter profile_id={id} profile />
            </div>
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
