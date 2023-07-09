import { cast } from "@/Types"
import { Card,CardContent,CardMedia } from "@mui/material"
import Link from "next/link"
const url = "https://api.themoviedb.org/3/person/{person_id}/images"
const newUrl = 'https://image.tmdb.org/t/p/w500/'
const Person = ({person}:{person:cast}) => {
    
  return (
    <Link href={`/people/${person.id}`}>
    <div className="max-w-xs m-4">
        {person&&<Card sx={{maxHeight:'100px',width:'100px' ,borderRadius:'30%'}} >
            <CardMedia>
             <img src = {person.profile_path?newUrl+person.profile_path:'/notfound.jpg'}/>
            </CardMedia>
            
           
            </Card>}
                <p>
                    {person.name}
                    </p>
                {person.known_for_department}
    </div>
    </Link>

  )
}

export default Person