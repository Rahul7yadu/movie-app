import { useRouter } from "next/router";

import Link from 'next/link'
const url = "https://api.themoviedb.org/3/person/{person_id}/images"
import { useGetPeopleQuery, useGetPeopleCreditQuery } from './../../services/DataApi'
import { Paper, Typography, Button, Card, CardMedia } from "@mui/material";
import Loading from "@/Holders/Loading";
const ImageUrl = 'https://image.tmdb.org/t/p/w500'
const People = () => {
  const router = useRouter()
  const id = router.query.id?.toString() || '1'

  const { data, isLoading } = useGetPeopleQuery(id)
  const { data: creditData, isLoading: creditLoading } = useGetPeopleCreditQuery(id)

  if (isLoading) return <Loading />
  return (
    <Paper sx={{ border: '2px solid red', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5px', minHeight: '100vh' }}>

      {data &&
        <div className='flex items-center justify-center flex-col'>
          <div className="flex justify-between lg:flex-row flex-col  ">
            <div className='flex sm:flex-col'>

            <img src={ImageUrl + data.profile_path} className="h-96 w-96"></img>
            <Typography>known for :  {data.known_for_department}</Typography>
              <Typography>Birth Date :   {data.birthday}</Typography>
              Gender : {data.gender===1?'Female':'Male'}

              <Typography className='max-w-fit'>place of birth :  {data.place_of_birth} </Typography>
              {data.also_known_as}
            </div>

            <div className=" max-w-2xl">
              <Typography sx={{ fontSize: '2rem' }} className='text-red-500'>{data.name}</Typography>
              <Typography sx={{ fontSize: '1rem' }}>
                {data.biography?data.biography:'no biography'}
              </Typography>

              
            </div>
              
          </div>


        </div>
      }
        <Typography sx={{fontSize:'2rem'}}>Movies</Typography>
      <div className='flex justify-start max-w-full overflow-x-scroll example'>
        {!isLoading && creditData && creditData.cast.map((movie) => {
          return (<div >
            <Link href={`/movie/${movie.id}`}>
              <div className="max-w-xs m-4">
                {movie && <Card sx={{ maxHeight: '300px', width: '200px', borderRadius: '5%' }} >
                  <CardMedia>
                    <img src={movie.backdrop_path ? ImageUrl + movie.backdrop_path : '/notfound.jpg'} className='h-full w-full' />
                  </CardMedia>
                  <p>
                    {movie.title}
                  </p>
                  {movie.character}

                </Card>}


              </div>
            </Link>
          </div>)
        })}
      </div>


      <Button onClick={() => history.back()} className="w-5">🔙back</Button>

    </Paper>
  )
}

export default People