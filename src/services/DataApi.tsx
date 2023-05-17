import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const base = 'https://api.themoviedb.org/3/tv/${ask}?api_key=${api_key}&language=en-US&page=${page}'
// Define a service using a base URL and expected endpoints
const apiKey = 'api_key='+process.env.NEXT_PUBLIC_API_KEY+'&language=en-US&'
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3/` }),
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: (name:'popular'|'now_playing'|'upcomming'|'top_rated') => `movie/${name}?${apiKey}page=1`,
    }),
    getMovieByPage:builder.query({
      query:(page:string)=>`movie/now_playing?${apiKey}page=${page}`
    }),
    getTv:builder.query({
      query:(name)=>`tv/now_playing?${apiKey}`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieQuery,useGetTvQuery ,useGetMovieByPageQuery} = pokemonApi