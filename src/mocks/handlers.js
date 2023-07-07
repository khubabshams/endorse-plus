import { rest } from "msw";

const baseURL = "https://endorse-plus-backend.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "adam",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image:
          "https://res.cloudinary.com/duv51g0vq/image/upload/v1/media/images/pexels-apunto-group-agencia-de-publicidad-7752846_qela85",
      })
    );
  }),
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
