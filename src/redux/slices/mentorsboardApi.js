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
  tagTypes: ["User", "Adverts", "All"],
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
    allAdverts: builder.mutation({
      query: () => ({
        url: "/all/",
        method:"GET",
      }),
      invalidatesTagsTags: ["All"],
    }),
    createAdvert: builder.mutation({
      query: (advertData) => ({
        url: "/adverts",
        method: "POST",
        body: advertData,
      }),
      invalidatesTags: ["User", "Adverts"],
    }),
    editAdvert: builder.mutation({
      query: (advertData) => ({
        url: `/adverts/${advertData.id}`,
        method: "PATCH",
        body: advertData.body,
      }),
      invalidatesTags: ["User", "Adverts"],
    }),
    deleteAdvert: builder.mutation({
      query: (id) => ({
        url: `/adverts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Adverts"],
    }),
    getAllUserAdverts: builder.query({
      query: () => "/card",
      providesTags: ["User", "Adverts"],
    }),
  }),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useLogoutMutation,
	useCreateAdvertMutation,
	useEditAdvertMutation,
	useDeleteAdvertMutation,
	useGetAllUserAdvertsQuery,
} = mentorsboardApi;