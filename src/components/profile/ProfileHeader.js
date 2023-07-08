import { React, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Profile.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ProfileEditForm from "./ProfileEditForm";

export function ProfileHeader({ profile, is_owner }) {
  const [editMode, setEditMode] = useState(false);

  const handleEdit = (event) => {
    event.preventDefault();
    if (is_owner) {
      setEditMode(true);
    }
  };

  return !editMode ? (
    <Card className="p-4 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex">
        <Image
          className="border-1"
          src={profile?.image}
          height="100"
          width="100"
          alt="avatar"
          roundedCircle
        />
        {is_owner && (
          <span
            variant="secondary"
            onClick={handleEdit}
            className={`fa-solid fa-pen-to-square align-self-start`}
          ></span>
        )}
      </div>
      <span className={`mt-2 ${styles.Name}`}>{profile?.name}</span>
      <span className="text-muted">{profile?.title}</span>
      <div className={` ${styles.Stats} d-flex mt-2`}>
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
      <div className={`d-flex flex-row justify-content-space-between mt-2`}>
        {!is_owner && (
          <>
            <Link to={`/recommendations/create/${profile?.id}/`}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Recommend {profile?.name}</Tooltip>}
              >
                <span
                  className={`${btnStyles.Button} fa-solid fa-user-check p-1`}
                ></span>
              </OverlayTrigger>
            </Link>
            <Link to={`/requests/create/${profile?.id}/`}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Request Recommendation</Tooltip>}
              >
                <span
                  className={`${btnStyles.Button} fa-solid fa-envelope p-1`}
                ></span>
              </OverlayTrigger>
            </Link>
          </>
        )}
        {profile?.linkedin_profile_url && (
          <Link
            to={{ pathname: `${profile?.linkedin_profile_url}` }}
            target="_blank"
          >
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>Visit {profile?.name}'s Linkedin Profile</Tooltip>
              }
            >
              <span className={`${btnStyles.Button} fa fa-linkedin p-1`}></span>
            </OverlayTrigger>
          </Link>
        )}
      </div>
      <div className={`mt-2`}>
        <span>{profile?.summary}</span>
      </div>

      <div>
        <span className={`${styles.JoinDate}`}>
          Joined {profile?.created_at}
        </span>
      </div>
    </Card>
  ) : (
    <Container className={`bg-white pt-3`}>
      <ProfileEditForm profile={profile} setEditMode={setEditMode} />
    </Container>
  );
}
