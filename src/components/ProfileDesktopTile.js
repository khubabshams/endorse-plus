import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom/cjs/react-router-dom";

export function ProfileDesktopTile({ profiles }) {
  return profiles.results.slice(0, 10).map((profile) => (
    <Link to={`/profiles/${profile.id}`} key={profile.id}>
      <Avatar
        src={profile.image}
        text={profile.name}
        title={profile.title}
        height={40}
      />
    </Link>
  ));
}
