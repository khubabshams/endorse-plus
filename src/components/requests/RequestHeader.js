import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom/cjs/react-router-dom";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Avatar from "../Avatar";

export function RequestHeader({
  profile,
  profile_image,
  profile_name,
  profile_title,
  date,
  is_owner,
  handleDelete,
}) {
  return (
    <div className={appStyles.CardHeader}>
      <span>
        <Link to={`/profiles/${profile}`}>
          <Avatar
            src={profile_image}
            text={profile_name}
            title={profile_title}
            height={60}
            time={date}
          />
        </Link>
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
