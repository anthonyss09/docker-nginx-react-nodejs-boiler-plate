import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "/node-server",
  }),

  endpoints: (builder) => ({
    getWelcomeMessage: builder.query({
      query: () => ({
        url: "/get-welcome-message",
      }),
    }),
  }),
});

export const { useGetWelcomeMessageQuery } = apiSlice;
