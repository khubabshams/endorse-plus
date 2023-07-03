import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom/cjs/react-router-dom";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Avatar from "../Avatar";

export function RequestHeader({
  profile,
  seen,
  profile_image,
  profile_name,
  profile_title,
  receiver_image,
  receiver_name,
  receiver_title,
  created_at,
  is_owner,
  handleDelete,
}) {
  return (
    <div className={appStyles.CardHeader}>
      <span>
        {is_owner ? (
          <Link to={`/profiles/${profile}`}>
            <Avatar
              src={receiver_image}
              text={receiver_name}
              title={receiver_title}
              height={60}
              time={`sent ${created_at}`}
            />
          </Link>
        ) : (
          <Link to={`/profiles/${profile}`}>
            <Avatar
              src={profile_image}
              text={profile_name}
              title={profile_title}
              height={60}
              time={`received ${created_at}`}
            />
          </Link>
        )}
      </span>
      <span>
        {is_owner && (
          <span>
            <Button
              variant="secondary"
              onClick={handleDelete}
              className={`fa-solid fa-trash ${btnStyles.Button} ${btnStyles.Option}`}
            ></Button>
          </span>
        )}
      </span>
    </div>
  );
}
