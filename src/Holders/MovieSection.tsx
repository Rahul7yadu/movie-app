import MovieCard from "@/components/Card"
import { Paper ,Typography} from "@mui/material";
import { Data } from "@/Types";
 
 const MovieSection = ({data}:{data:Data}) => {
  console.log(data)
  return (
      !data  ?
    <Paper sx={{height:'100vh' ,display:'flex',alignContent:'center' , justifyContent:'center'}}>
      <Typography variant="h2">
          No movies found  
      </Typography>
    </Paper>
    :
    (<Paper sx={{margin:0}}>
    <div className="grid sm:grid-cols-3 lg:grid-cols-6 grid-cols-2 md:grid-cols-3 gap-8 mx-2">
        {data.results.map((movie,id)=>{
          return <MovieCard data={movie} key={id}/>
        })}
    </div>
        </Paper>)
  )
}
export default MovieSection
