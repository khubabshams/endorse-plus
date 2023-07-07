import { rest } from "msw";

const baseURL = "https://endorse-plus-backend.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "admin",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 1,
        profile_image:
          "https://res.cloudinary.com/duv51g0vq/image/upload/v1/media/images/pexels-apunto-group-agencia-de-publicidad-7752846_qela85",
      })
    );
  }),
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: "John Doe",
        title: "Software Developer",
        created_at: "03 June 2023",
        updated_at: "03 June 2023",
        linkedin_profile_url: "",
        summary: "",
        image:
          "https://res.cloudinary.com/duv51g0vq/image/upload/v1/media/images/pexels-apunto-group-agencia-de-publicidad-7752846_jzuxhb",
        requests_sent: [2],
        requests_received: [3],
        recommendations_sent: [],
        recommendations_received: [29, 3],
        boosts: [93],
        is_owner: true,
        unseen_requests_count: 0,
        recommendations_sent_count: 0,
        experiences: [2, 1],
        recommendations_received_count: 2,
        requests_sent_count: 1,
        requests_received_count: 1,
      })
    );
  }),
];
