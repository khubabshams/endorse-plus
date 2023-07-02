import React from "react";
import Avatar from "../Avatar";
import { Link } from "react-router-dom/cjs/react-router-dom";

export function ProfileDesktopTile({ profiles }) {
  return profiles.results.slice(0, 10).map((profile) => (
    <span key={profile.id}>
      <Link to={`/profiles/${profile.id}`}>
        <Avatar
          src={profile.image}
          text={profile.name}
          title={profile.title}
          height={40}
        />
      </Link>
      <hr className="w-50 align-self-center" />
    </span>
  ));
}
