import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { axiosRes } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import { ExperienceHeader } from "./ExperienceHeader";
import ExperienceCreateEditForm from "./ExperienceCreateEditForm";

const Experience = (props) => {
  const [editMode, setEditMode] = useState(props?.new);

  const {
    created_at,
    id,
    profile_id,
    is_owner,
    title,
    date_from,
    date_to,
    is_current,
    description,
    company,
    company_name,
    recommendations_count,
    createNew,
    setExperiences,
  } = props;

  const updateExperience = (updatedData) => {
    setExperiences((prevRecommendations) => ({
      ...prevRecommendations,
      results: prevRecommendations.results.map((experience) => {
        return experience.id === id
          ? {
              ...experience,
              ...updatedData,
            }
          : experience;
      }),
    }));
  };

  const deleteExperience = () => {
    setExperiences((prevRecommendations) => ({
      ...prevRecommendations,
      results: prevRecommendations.results.filter((experience) => {
        return experience.id !== id;
      }),
    }));
  };

  const handleEdit = (event) => {
    event.preventDefault();

    if (is_owner) {
      setEditMode(true);
    }
  };

  const handleDelete = async () => {
    if (is_owner) {
      if (window.confirm("Are you sure you want to remove this experience?")) {
        try {
          await axiosRes.delete(`/experiences/${id}`);
          deleteExperience();
        } catch (err) {
          // console.log(err);
        }
      }
    }
  };

  return (
    <>
      {!props.new && (
        <ExperienceHeader
          {...{
            title,
            company_name,
            date_from,
            date_to,
            is_current,
            is_owner,
            editMode,
            setEditMode,
            handleEdit,
            handleDelete,
          }}
        />
      )}
      <div>
        {editMode ? (
          <ExperienceCreateEditForm
            {...props}
            createNew={createNew}
            edit={editMode}
            setEditMode={setEditMode}
            updateExperience={updateExperience}
          />
        ) : (
          <Card.Text className="p-1">
            {description}
            <br />
            {recommendations_count && (
              <>
                <span
                  className={`d-flex justify-content-center ${appStyles.Info}`}
                >
                  {recommendations_count} Endorses
                </span>
              </>
            )}
          </Card.Text>
        )}
      </div>
      <hr className="w-50 align-self-center" />
    </>
  );
};

export default Experience;
