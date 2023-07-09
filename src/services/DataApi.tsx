import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MovieWithCast, castResponse ,Person} from '@/Types'
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
    }),
    getCast:builder.query<castResponse,string>({
      query:(id:string)=>`movie/${id}/credits?${apiKey}`
    }),
    getPeople:builder.query<Person,string>({
      query:(id:string)=>`person/${id}?${apiKey}`
    }),
    getPeopleCredit:builder.query({
      query:(id:string)=>`/person/${id}/movie_credits`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieQuery,useGetTvQuery ,useGetMovieByPageQuery,useGetCastQuery,useGetPeopleQuery,useGetPeopleCreditQuery} = pokemonApi