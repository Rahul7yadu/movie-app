
import { useRouter } from "next/router"
import {useState,useEffect} from 'react'
import { Card,CardContent,CardMedia, Paper ,Typography,Button} from "@mui/material"
import Loading  from "@/Holders/Loading"
import Cast from "@/components/Cast"
import { DataDisplay } from "@/components/Elements/Ui/DataDisplay"
const SingleMovie = () => {
 const router = useRouter()
//  const id = router.query.id
const id = router.query.id?.toString() || '1'
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

  const defaultImg = loading?'/spinner.gif':'/notfound.jpg'
  if(loading) return <Loading/>
  
return (
     <Paper sx={{ border: '2px solid red', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '30px', minHeight: '100vh' }} >
      <div className="flex items-center justify-center flex-col " >
        <div className='flex justify-evenly lg:flex-row flex-col bg-gradient-to-r '>
          <img src={data.backdrop_path ? ImageUrl + data.backdrop_path : defaultImg} className="max-h-96 w-auto " alt='./spinner.gif' />
          <section className=" ml-4 max-w-lg">
            <Typography sx={{ fontSize: '2rem' }}>  {data.original_title || data.name}</Typography>
            <Typography sx={{ fontSize: '1.5rem' }}>{data.tagline}</Typography>
            <Typography>{data.overview}</Typography>
          <DataDisplay displayData={data} />
          </section>

        </div>

      
      </div>
      <Typography sx={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>CAST</Typography>
      <Cast type="tv" movieId={id.toString()} />
      <Button onClick={() => history.back()}>back</Button>

    </Paper>
)
  // return (
   

  //   <Paper sx={{height:'100vh',border:'2px solid red',display:'flex',alignItems:'center',flexDirection:'column'}} >
  //     <Card className="w-full h-full flex items-center flex-col">
  //       <CardMedia image={data.backdrop_path?ImageUrl+data.backdrop_path:'/notfound.jpg'} className="h-full w-full"/>
  //       <CardContent>

  //      <DataDisplay displayData={data} />
  //       </CardContent>
  //     </Card>
  //     </Paper>
     
    
  // )
}

export default SingleMovie

