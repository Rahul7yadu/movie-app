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
    spoken_languages: Array<object>
    status: string;
    tagline: string;
    title: string;
    video:boolean;
    vote_average:number;
    vote_count:number;
}

export const DataDisplay = ({displayData}: {displayData:Data}) => {
    return (
        <div><Typography textAlign={'center'} variant='h1'> Title : {displayData.original_title}</Typography>
        <Typography variant="h3">Budget : {displayData.budget}</Typography>
        </div>
    )
}
