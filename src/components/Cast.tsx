import Person from "./Person"
import { useGetCastQuery ,useGetTvCastQuery} from "@/services/DataApi"
import Loading from "@/Holders/Loading"
const Cast = ({movieId,type}:{movieId:string,type:'movie'|'tv'}) => {
    
const url = type==='movie'?`https://api.themoviedb.org/3/movie/${movieId}/credits`: `https://api.themoviedb.org/3/tv/${movieId}/credits`
    const {data,isLoading,error} =useGetCastQuery(url)
  console.log(data,error)
    console.log(error)
if(isLoading)return <Loading/>
  return (
    <div className="flex justify-start max-w-full overflow-x-scroll example p-10 mt-8">{data&&data.cast.map((personData,idx)=><Person person={personData} key={idx}/>)}</div>
  )
}

export default Cast