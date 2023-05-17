import { useState } from "react";
import  Link  from "next/link";
import { useRouter } from "next/router";
import { Modal, Card, CardContent, CardMedia, Button } from "@mui/material";
import CustomModal from './Elements/Ui/Modal'
interface props {
  data: {
    title: string;
  }
}
const BASE_URL = 'https://image.tmdb.org/t/p/w500/'
const originalImgUrl = 'https://image.tmdb.org/t/p/original'
const MovieCard = ({ data, type }: any) => {
  const router = useRouter()
  

  const overview = data.overview ? data.overview.slice(0, 300) + "..." : "no overwiev present"
   const mediaType = data.media_type || 'tv'
  const [open, setOpen] = useState(false)
  function handleToggle() {
    setOpen(open => !open)
  }
  function handleClose() {
    setOpen(false)
  }
  return (
<>  
<CustomModal open={open} onClose={handleClose}>
  <Card  className="sm:w-96 w-80 ">
    <CardMedia image={data.poster_path?originalImgUrl+data.poster_path:'/default.jfif'} title='movie' sx={{minHeight:400}} />
    <CardContent>
        <div>
          <h1 className="text-base text-red-400 shrink-0">{data.title?data.title:data.name}</h1>
          <h1>{overview}</h1>
        </div>
        <div className="text-xl text-red-500 shrink-0">

        <p>
          release data : {data.release_date}
        </p>
        <p>
          vote : {data.vote_average}
        </p>
        <Link href={mediaType==="movie"?`/movie/${data.id}`:`/tv/${data.id}`}><Button variant={"text"}>More</Button></Link>
        </div>
    </CardContent>
  </Card>
</CustomModal>
    <Card onClick={handleToggle}>
      <CardMedia image={data.poster_path?BASE_URL + data.poster_path:'/default.jfif'} title='movie' sx={{ height: 300 }}>

      </CardMedia>

      <CardContent  >
        <div>
          <h1 className="text-base text-red-400 shrink-0">{data.title?data.title:data.name}</h1>
        </div>
      </CardContent>
    </Card>
      </>
  )
}

export default MovieCard