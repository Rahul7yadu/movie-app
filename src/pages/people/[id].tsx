import { useRouter } from "next/router";
import { useState } from "react";
const url = "https://api.themoviedb.org/3/person/{person_id}/images"
import {useGetPeopleQuery,useGetPeopleCreditQuery} from './../../services/DataApi'
import { Paper,Card, Typography ,Button ,} from "@mui/material";
import Loading from "@/Holders/Loading";
const ImageUrl = 'https://image.tmdb.org/t/p/original'
const People= () => {
    const router = useRouter()
    const [read,useRead] = useState(false)
    const id= router.query.id?.toString()|| '1'

        const {data,isLoading} = useGetPeopleQuery(id)
       
        if(isLoading) return <Loading/>
  return (
    <Paper sx={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',border:'2px solid red',width:'100vw'}}>
        
            {data&&
            <div className='w-full h-full flex items-start flex-col  border-2  sm:p-20 p-5'>
                <div className="flex sm:flex-row flex-col justify-evenly border-2  w-full">
                  <img src={ImageUrl+data.profile_path} className="sm:h-[500px] w-auto"></img>

                  <div className="border-2  max-w-xl">
                  <Typography sx={{fontSize:'2rem'}}>{data.name}</Typography>
                  <Typography sx={{fontSize:'1rem'}}>
                    {!read?data.biography.slice(0,300)+'...':data.biography}
                    <Button onClick={()=>useRead(read=>!read)} className="text-red-500">{!read?'read more':'X'}</Button>
                  </Typography>
                    
                <Typography>known for :  {data.known_for_department}</Typography>
               <Typography>Birth Date :   {data.birthday}</Typography> 
                <Typography>place of birth :  {data.place_of_birth} ,
                
                </Typography>
                  </div>

                </div>
                
                
                <div className='sm:max-w-2xl max-w-xs'>
                
                
              
               
                </div>
            </div>
            }
            {}
            <Button onClick={()=>history.back()} className="w-5">🔙back</Button>
        
    </Paper>
  )
}

export default People