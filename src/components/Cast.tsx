import Person from "./Person"
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks"
import { useGetCastQuery ,useGetTvCastQuery} from "@/services/DataApi"
import Loading from "@/Holders/Loading"
const url = 'https://api.themoviedb.org/3/movie/{movie_id}/credits'
const Cast = ({movieId,type}:{movieId:string,type:'movie'|'tv'}) => {
    
    const {data,isLoading} = type=='movie'?useGetCastQuery(movieId):useGetTvCastQuery(movieId)
  
    console.log(data)
if(isLoading)return <Loading/>
  return (
    <div className="flex justify-start max-w-full overflow-x-scroll example p-10 mt-8">{data&&data.cast.map((personData,idx)=><Person person={personData} key={idx}/>)}</div>
  )
}

export default Cast