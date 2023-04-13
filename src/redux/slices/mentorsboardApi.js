import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mentorsboardApi = createApi({
  reducerPath: "mentorsboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nodejs-api-mentorsboard.onrender.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Adverts", "Mentor"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (newUserData) => ({
        url: "/user/register",
        method: "POST",
        body: newUserData,
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "/user/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    getAllAdverts: builder.query({
      query: () => "/adverts",
      providesTags: ["Adverts"],
    }),
    createAdvert: builder.mutation({
      query: (advertData) => ({
        url: "/adverts/mentor",
        method: "POST",
        body: advertData,
      }),
      invalidatesTags: ["User", "Adverts", "Mentor"],
    }),
    editAdvert: builder.mutation({
      query: (advertData) => ({
        url: `/adverts/mentor/${advertData.id}`,
        method: "PATCH",
        body: advertData.body,
      }),
      invalidatesTags: ["User", "Adverts", "Mentor"],
    }),
    deleteAdvert: builder.mutation({
      query: (id) => ({
        url: `/adverts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Adverts", "Mentor"],
    }),
    getAllUserAdverts: builder.query({
      query: () => "/adverts/mentor",
      providesTags: ["User", "Adverts", "Mentor"],
    }),
  }),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useLogoutMutation,
  useGetAllAdvertsQuery,
	useCreateAdvertMutation,
	useEditAdvertMutation,
	useDeleteAdvertMutation,
	useGetAllUserAdvertsQuery,
} = mentorsboardApi;