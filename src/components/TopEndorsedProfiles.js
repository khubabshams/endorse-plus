import { ProfileMobileTile } from "./profile/ProfileMobileTile";
import { ProfileDesktopTile } from "./profile/ProfileDesktopTile";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useProfileData } from "../contexts/ProfileDataContext";

const TopEndorsedProfiles = ({ mobile }) => {
  const { topEndorsedProfiles } = useProfileData();

  return (
    <Card className={`mb-2 p-1 ${mobile && "d-md-none"}`}>
      <p className="text-center">Top Endorsed</p>
      {mobile ? (
        <ProfileMobileTile profiles={topEndorsedProfiles} />
      ) : (
        <ProfileDesktopTile profiles={topEndorsedProfiles} />
      )}
    </Card>
  );
};

export default TopEndorsedProfiles;
