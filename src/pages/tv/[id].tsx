import Image from "next/image"
import { useRouter } from "next/router"
import {useState,useEffect} from 'react'
import { Card,CardContent,CardMedia, Paper } from "@mui/material"
import { Loading } from "@/Holders/Loading"
import { DataDisplay } from "@/components/Elements/Ui/DataDisplay"
const singleMovie = () => {
 const router = useRouter()
 const id = router.query.id
const [data,setData] = useState(Object)
 const ImageUrl = 'https://image.tmdb.org/t/p/original'
 const apiKey = process.env.NEXT_PUBLIC_API_KEY
const [loading,setLoading]=useState(true)
 const fetchData =async ()=>{
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`)
  const data = await res.json()
  return data
 }
useEffect(() => {
  setLoading(true)
  fetchData().then((res)=>
  {

    setData(res)})
    setLoading(false)
  
}, [])

  const movieDataArray = []
  for (let [key,value] of Object.entries(data)){
    const myKey = key
    movieDataArray.push({[key]:value})
  }
  console.log(movieDataArray)
  if(loading) return <Loading/>
  return (

    <Paper sx={{height:'100vh',border:'2px solid red',display:'flex',alignItems:'center',flexDirection:'column'}} >
      <Card className="w-full h-full flex items-center flex-col">
        <CardMedia image={data.poster_path?ImageUrl+data.backdrop_path:'/default.jfif'} className="h-3/4 sm:w-3/4"/>
        <CardContent>

       <DataDisplay displayData={data} />
        </CardContent>
      </Card>
      </Paper>
    
  )
}

export default singleMovie

export const getServerSideProps =async (context:any)=>{
const id = context.query.id
const api_key = process.env.NEXT_PUBLIC_API_KEY
  const callApi = async () => {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
    const data = await result.json()
    return data
  }
  const data =await callApi() 
  return {
    props:{data}} 
}