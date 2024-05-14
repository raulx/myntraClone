import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "/api";
// const BASE_URL = "http://localhost:3300";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    fetchFn: async (...args) => {
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      logoutAdmin: builder.mutation({
        query: () => {
          return {
            url: "/admin/logout",
            method: "POST",
          };
        },
      }),
      loginAdmin: builder.mutation({
        query: ({ id, password }) => {
          return {
            url: "/admin/login",
            credentials: "include",
            method: "POST",
            body: { id, password },
          };
        },
      }),
      registerUser: builder.mutation({
        query: ({ name, email, password }) => {
          return {
            url: "/user/register",
            method: "POST",
            body: { name, email, password },
          };
        },
      }),
    };
  },
});

export const {
  useRegisterUserMutation,
  useLoginAdminMutation,
  useLogoutAdminMutation,
} = authApi;

export default authApi;
