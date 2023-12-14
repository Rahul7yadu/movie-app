
import { useRouter } from "next/router"
import Cast from '@/components/Cast'
import { useGetMovieByIdQuery } from "@/services/DataApi"
import { Button, Paper, Typography} from "@mui/material"
import Loading from "@/Holders/Loading"
import { DataDisplay } from "@/components/Elements/Ui/DataDisplay"
const SingleMovie = () => {
  const router = useRouter()
  const id = router.query.id?.toString() || '1'


  const ImageUrl = 'https://image.tmdb.org/t/p/original'
  
  const {data,isLoading} = useGetMovieByIdQuery(id)
  
  const defaultImg = isLoading?'/spinner.gif':'/notfound.jpg'

  if (isLoading) return <Loading />
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
      <Cast type="movie" movieId={id.toString()} />
      <Button onClick={() => history.back()}>back</Button>

    </Paper>






  )
}

export default SingleMovie

