import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom/cjs/react-router-dom";

export function ProfileMobileTile({ profiles }) {
  return (
    <div className="d-flex justify-content-around">
      {profiles.results.slice(0, 5).map((profile) => (
        <Link to={`/profiles/${profile.id}`} key={profile.id}>
          <Avatar src={profile.image} height={40} />
        </Link>
      ))}
    </div>
  );
}
