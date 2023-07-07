import React from "react";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Profile.module.css";
import appStyles from "../../App.module.css";
import Experience from "../../components/profile/Experience";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function ExperiencesList({
  is_owner,
  createExperience,
  handleCreateExperience,
  experiences,
  setExperiences,
}) {
  return (
    <Card className={`p-1 ${styles.Experience}`}>
      <div className={appStyles.CardHeader}>
        <h3>Experiences</h3>
        {is_owner &&
          (createExperience ? (
            <span>
              <Button
                variant="secondary"
                onClick={() => handleCreateExperience(false)}
                className={`fa-solid fa-undo ${btnStyles.Button} ${btnStyles.Option}`}
              ></Button>
              <Button
                variant="secondary"
                form="experienceCreateEditForm"
                type="submit"
                className={`fa-solid fa-floppy-disk ${btnStyles.Button} ${btnStyles.Option}`}
              ></Button>
            </span>
          ) : (
            <Button
              variant="secondary"
              onClick={() => handleCreateExperience(true)}
              className={`fa-solid fa-plus ${btnStyles.Button} ${btnStyles.Option}`}
            ></Button>
          ))}
      </div>
      {!createExperience ? (
        experiences.results.length > 0 &&
        experiences.results.map((experience) => (
          <Experience
            key={experience.id}
            {...experience}
            setExperiences={setExperiences}
          />
        ))
      ) : (
        <Experience createNew={true} setExperiences={setExperiences} />
      )}
    </Card>
  );
}
