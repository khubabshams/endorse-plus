import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom/cjs/react-router-dom";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Avatar from "../Avatar";

export function ExperienceHeader({
  title,
  company_name,
  date_from,
  date_to,
  is_current,
  is_owner,
  editMode,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className={appStyles.CardHeader}>
      <span>
        <h4>
          {date_from} • {is_current ? "now" : date_to}
        </h4>
        <h4>
          {title} at {company_name}
        </h4>
      </span>
      <span>
        {is_owner &&
          (!editMode ? (
            <span>
              <Button
                variant="secondary"
                onClick={handleEdit}
                className={`fa-solid fa-pen-to-square ${btnStyles.Button} ${btnStyles.Option}`}
              ></Button>
              <Button
                variant="secondary"
                onClick={handleDelete}
                className={`fa-solid fa-trash ${btnStyles.Button} ${btnStyles.Option}`}
              ></Button>
            </span>
          ) : (
            <>
              <Button
                variant="secondary"
                form="experienceCreateEditForm"
                type="submit"
                className={`fa-solid fa-floppy-disk ${btnStyles.Button} ${btnStyles.Option}`}
              ></Button>
              <Button
                variant="secondary"
                onClick={handleDelete}
                className={`fa-solid fa-trash ${btnStyles.Button} ${btnStyles.Option}`}
              ></Button>
            </>
          ))}
      </span>
    </div>
  );
}
