import { ExperiencesList } from "../../components/profile/ExperiencesList";
import { ProfileHeader } from "../../components/profile/ProfileHeader";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import Card from "react-bootstrap/Card";

import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Loader from "../../components/Loader";
import RecommendationRouter from "../recommendations/RecommendationRouter";

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
              <ExperiencesList
                is_owner={is_owner}
                experiences={experiences}
                createExperience={createExperience}
                handleCreateExperience={handleCreateExperience}
                setExperiences={setExperiences}
              />
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
