import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MovieWithCast, castResponse ,Person} from '@/Types'
const base = 'https://api.themoviedb.org/3/tv/${ask}?api_key=${api_key}&language=en-US&page=${page}'
// Define a service using a base URL and expected endpoints
const apiKey = 'api_key='+process.env.NEXT_PUBLIC_API_KEY+'&language=en-US&'
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3/` }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({category,page}:{category:'popular'|'now_playing'|'upcomming'|'top_rated'|string,page:string}) => `movie/${category||'popular'}?${apiKey}&page=${page||'1'}`,
    }),
    getMovieById:builder.query({
      query:(id:string)=>`movie/${id}?${apiKey}`
    }),
    getTv:builder.query({
      query:(name)=>`tv/now_playing?${apiKey}`
    }),
    getCast:builder.query<castResponse,string>({
      query:(id:string)=>`${id}?${apiKey}`
    }),
    getTvCast:builder.query<castResponse,string>({
      query:(id:string)=>`tv/${id}/credits?${apiKey}`
    }),
    getPeople:builder.query<Person,string>({
      query:(id:string)=>`person/${id}?${apiKey}`
    }),
    getPeopleCredit:builder.query<MovieWithCast,string>({
      query:(id:string)=>`/person/${id}/movie_credits?${apiKey}`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery,useGetTvQuery ,useGetMovieByIdQuery,useGetCastQuery,useGetPeopleQuery,useGetPeopleCreditQuery,useGetTvCastQuery} = pokemonApi

