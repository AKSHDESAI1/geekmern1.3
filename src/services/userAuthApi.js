import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/' }),

    endpoints: (builder) => ({

        registerUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'register',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            },
        }),

        loginUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'login',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            },
        }),

        loggedUser: builder.query({
            query: (token) => {
                return {
                    url: 'loggedUser',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': token
                    }
                }
            },
        }),

        sendPasswordResetEmail: builder.mutation({
            query: (user) => {
                return {
                    url: 'send-reset-password-email',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            },
        }),
    }),
})

export const { useRegisterUserMutation, useLoginUserMutation, useLoggedUserQuery, useSendPasswordResetEmailMutation } = userAuthApi;