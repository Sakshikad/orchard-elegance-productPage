import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchBaseQueryCb = fetchBaseQuery({
  // baseUrl: "",
  baseUrl: import.meta.env.VITE_APP_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = "GET_USER_TOKEN";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQuery = createApi({
  reducerPath: "baseQuery",
  baseQuery: fetchBaseQueryCb,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = baseQuery;
