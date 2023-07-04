
import { useRouter } from "next/router"

import {useState,useEffect} from 'react'
import {  Button, Paper} from "@mui/material"
import Loading  from "@/Holders/Loading"
import { DataDisplay } from "@/components/Elements/Ui/DataDisplay"
const SingleMovie = () => {
 const router = useRouter()
 const id = router.query.id
const [data,setData] = useState(Object)
 const ImageUrl = 'https://image.tmdb.org/t/p/original'
 const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const [loading,setLoading]=useState(true)
 const fetchData =async ()=>{
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
  const data = await res.json()
  return data
 }
useEffect(() => {
  setLoading(true)
  
  fetchData().then((res)=>
  {

    setData(res)})
    setLoading(false)
  
}, [id])

 
  if(loading) return <Loading/>
  return (
    
    <Paper sx={{border:'2px solid black',display:'flex',alignItems:'center',flexDirection:'column',padding:'30px'}} >
      <div className="flex items-center justify-center flex-col">

      <img src={data.backdrop_path?ImageUrl+data.backdrop_path:'/spinner.jpg'} className="h-full w-full" loading="lazy" alt='./spinner.gif'/>
     <DataDisplay displayData={data} />
      </div>
      <Button onClick={()=>history.back()}>back</Button>
    </Paper>
    
      

     
   
   
  )
}

export default SingleMovie

