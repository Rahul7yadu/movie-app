import Person from "./Person"

import { useGetCastQuery } from "@/services/DataApi"
import Loading from "@/Holders/Loading"
const url = 'https://api.themoviedb.org/3/movie/{movie_id}/credits'
const Cast = ({movieId}:{movieId:string}) => {
    const {data,isLoading} = useGetCastQuery(movieId)
    console.log(data)
if(isLoading)return <Loading/>
  return (
    <div className="flex justify-start max-w-full overflow-x-scroll example">{data&&data.cast.map((personData,idx)=><Person person={personData} key={idx}/>)}</div>
  )
}

export default Cast