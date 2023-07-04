import { useState } from "react";
import  Link  from "next/link";
import { useRouter } from "next/router";
import { Card, CardContent, CardMedia, Button } from "@mui/material";
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
 let  route = router.route
if(route==='/')
{
  route='/movie'
} 
console.log(route)
  const overview = data.overview ? data.overview.slice(0, 300) + "..." : "no overwiev present"
  const mediaType = data.media_type ==='movie' ?'/movie':'/tv'
   
  const [open, setOpen] = useState(false)
  function handleToggle() {
    setOpen(open => !open)
  }
  function handleClose() {
    setOpen(false)
  }
  return (
<>  
<CustomModal open={open} onClose={handleClose} >
  <Card  className=" sm:max-w-2xl max-w-xs " >
    <CardMedia image={data.poster_path?originalImgUrl+data.poster_path:'/spinner.jpg'} title='movie' sx={{minHeight:400}} />
    <CardContent>
        <div>
          <h1 className="text-base text-red-400 shrink-0">{data.title?data.title:data.name}</h1>
          <h1>{overview}</h1>
        </div>
        <div className="text-xl text-red-500 shrink-0">

        <p>
          release date : {data.release_date}
        </p>
        <p>
          vote : {data.vote_average}
        </p>
        <Link href={route==='/search'?`/${mediaType}/${data.id}`:`${route}/${data.id}` }><Button variant={"text"}>More</Button></Link>
        <Button onClick={handleClose}>close</Button>
        </div>
    </CardContent>
  </Card>
</CustomModal>
    <Card onClick={handleToggle}>
      <CardMedia image={data.poster_path?BASE_URL + data.poster_path:'/notfound.jpg'} title='movie' sx={{ height: 300 }}>

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