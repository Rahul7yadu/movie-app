import { Typography } from "@mui/material";

type Data = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: { id: number | string, name: string, poster_path: string, backdrop_path: string };
    budget: number,
    homepage: string;
    id: number | string;
    imdb_id: string;
    original_language: string
    original_title: string
    overview: string
    popularity: number | string
    poster_path: string;
    production_companies: Array<object>;
    production_countries: Array<object>;
    release_date: string;
    revenue: number
    runtime: number
    spoken_languages: Array<{english_name : string,
        iso_639_1 :  string,
        name: string}>
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name: string;
}

export const DataDisplay = ({ displayData:{status,original_title,name,overview,budget,original_language,runtime,spoken_languages,release_date,adult,popularity,tagline,homepage} }: { displayData: Data }) => {
   
    return (
        <div className="grid items-center gap-3  font-bold">
            <Typography sx={{fontSize:'2rem'}}>  {original_title || name}</Typography>
            <Typography sx={{fontSize:'1.5rem'}}>{tagline}</Typography>
            <Typography>{overview}</Typography>
            {status}
            {budget && <Typography>Budget : {budget}</Typography>}
            <Typography>Original Title : {original_language}</Typography>
            {release_date && <Typography>Release Date: {release_date}</Typography>}
            {runtime&&<Typography>Runtime:{runtime}</Typography>}
           <div> Languages {spoken_languages&&spoken_languages.map((lang)=><Typography display={'flex'}>{ lang.english_name}</Typography>)}</div>
            {adult&&'Adult'}

            {/* <Cast/> */}
        </div>
    )
}
 