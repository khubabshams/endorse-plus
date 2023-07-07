import { React, useState, useRef } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import CustomAlert from "../CustomAlert";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

const ProfileEditForm = ({ profile, setEditMode }) => {
  const [profileData, setProfileData] = useState({
    name: profile.name,
    title: profile.title,
    image: profile.image,
    summary: profile.summary,
    linkedin_profile_url: profile?.linkedin_profile_url,
  });
  const setCurrentUser = useSetCurrentUser();
  const setCurrentProfileData = useSetProfileData();

  const [errors, setErrors] = useState({});
  const { name, title, image, summary, linkedin_profile_url } = profileData;
  const { id } = useParams();
  const imageFile = useRef();

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    name && formData.append("name", name);
    title && formData.append("title", title);
    imageFile?.current?.files[0] &&
      formData.append("image", imageFile?.current?.files[0]);
    summary && formData.append("summary", summary);
    linkedin_profile_url &&
      formData.append("linkedin_profile_url", linkedin_profile_url);

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);

      onSubmitSuccess(data);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const onSubmitSuccess = (data) => {
    setCurrentUser((currentUser) => ({
      ...currentUser,
      profile_image: data.image,
    }));

    setCurrentProfileData((prevState) => ({
      ...prevState,
      pageProfile: {
        results: [
          {
            ...{
              name: data.name,
              title: data.title,
              image: data.image,
              summary: data.summary,
              linkedin_profile_url: data.linkedin_profile_url,
            },
          },
        ],
      },
    }));

    setEditMode(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        {image && (
          <Figure>
            <Image
              className="border-1"
              src={image}
              fluid
              height="100"
              width="100"
              roundedCircle
            />
          </Figure>
        )}
        <>
          <Button
            onClick={() => setEditMode(false)}
            className={`fa-solid fa-undo align-self-start ${btnStyles.Button} ${btnStyles.Option}`}
          ></Button>
          <Button
            form="profileEditForm"
            type="submit"
            className={`fa-solid fa-floppy-disk align-self-start ${btnStyles.Button} ${btnStyles.Option}`}
          ></Button>
        </>
      </div>

      <Form onSubmit={handleSubmit} id="profileEditForm">
        <div className="d-flex justify-content-center">
          <Form.Group>
            <Form.Label className="d-none">Image</Form.Label>
            <Form.File
              id="image-upload"
              ref={imageFile}
              accept="image/*"
              onChange={(e) => {
                if (e.target.files.length) {
                  setProfileData({
                    ...profileData,
                    image: URL.createObjectURL(e.target.files[0]),
                  });
                }
              }}
            />
          </Form.Group>
          <CustomAlert error={errors?.image} />
        </div>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </Form.Group>
        <CustomAlert error={errors?.name} />

        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>
        <CustomAlert error={errors?.title} />

        <Form.Group controlId="linkedin_profile_url">
          <Form.Label>linkedin Profile</Form.Label>
          <Form.Control
            type="text"
            name="linkedin_profile_url"
            value={linkedin_profile_url}
            onChange={handleChange}
          />
        </Form.Group>
        <CustomAlert error={errors?.linkedin_profile_url} />

        <Form.Group controlId="summary">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="summary"
            value={summary}
            onChange={handleChange}
          />
        </Form.Group>
        <CustomAlert error={errors?.summary} />

        <CustomAlert error={errors?.non_field_errors} />
        <CustomAlert error={errors?.detail} detail={true} />
      </Form>
    </div>
  );
};

export default ProfileEditForm;
