import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import { Link } from "react-router-dom/cjs/react-router-dom";

const TopEndorsedProfiles = ({ mobile }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    topEndorsedProfiles: { results: [] },
  });

  const { topEndorsedProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          `/profiles/?ordering=-boosts_count&`
        );
        setProfileData((prevProfileData) => ({
          ...prevProfileData,
          topEndorsedProfiles: data,
        }));
      } catch (error) {
        console.log(error);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Card className={`mb-2 p-1 ${mobile && "d-md-none"}`}>
      <p className="text-center">Top Endorsed</p>
      {mobile ? (
        <div className="d-flex justify-content-around">
          {topEndorsedProfiles.results.slice(0, 5).map((profile) => (
            <Link to={`/profiles/${profile.id}`} key={profile.id}>
              <Avatar src={profile.image} height={40} />
            </Link>
          ))}
        </div>
      ) : (
        topEndorsedProfiles.results.slice(0, 10).map((profile) => (
          <Link to={`/profiles/${profile.id}`} key={profile.id}>
            <Avatar
              src={profile.image}
              text={profile.name}
              title={profile.title}
              height={40}
            />
          </Link>
        ))
      )}
    </Card>
  );
};

export default TopEndorsedProfiles;
