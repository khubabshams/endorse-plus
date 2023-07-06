import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Profile.module.css";
import { Button, Card, Image } from "react-bootstrap";

export function ProfileHeader({ profile }) {
  return (
    <Card className="p-4 d-flex flex-column justify-content-center align-items-center">
      <Image
        className="border-1"
        src={profile?.image}
        height="100"
        width="100"
        roundedCircle
      />
      <span className={`mt-2 ${styles.Name}`}>{profile?.name}</span>
      <span className="text-muted">{profile?.title}</span>
      <div
        className={` ${styles.Stats} d-flex flex-row justify-content-space-around align-items-center mt-2`}
      >
        <span className="pr-1">
          {profile?.recommendations_received_count}
          <span> Received </span>
        </span>
        <span className="pr-1">
          {profile?.recommendations_sent_count || 0}
          <span> Sent </span>
        </span>
        <span className="pr-1">
          {profile?.boosts_count || 0}
          <span> Boosts</span>
        </span>
      </div>
      <div className="d-flex mt-2">
        <Button className={`${btnStyles.Button}`}>Edit Profile</Button>
      </div>
      <div className={`${appStyles.Content} mt-2`}>
        <span>{profile?.summary}</span>
      </div>
      {profile?.linkedin_profile_url && (
        <div className="gap-3 mt-2 d-flex flex-row justify-content-center align-items-center">
          <span>
            <Link to={profile?.linkedin_profile_url}>
              <i className="fa fa-linkedin"></i>
            </Link>
          </span>
        </div>
      )}
      <div>
        <span className={`${styles.JoinDate}`}>
          Joined {profile?.created_at}
        </span>
      </div>
    </Card>
  );
}
