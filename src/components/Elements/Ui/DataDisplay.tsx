import { Button, Typography } from "@mui/material";
import Link from 'next/link'
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
    spoken_languages: Array<{
        english_name: string,
        iso_639_1: string,
        name: string
    }>
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name: string;
}

export const DataDisplay = ({ displayData: { status, original_title, name, overview, budget, original_language, runtime, spoken_languages, release_date, adult, popularity, tagline, homepage, vote_average, vote_count } }: { displayData: Data }) => {

    return (
        <div>
           
            <div className="flex justify-start items-start font-bold mt-10">

                <section>
                {status}
                    {budget && <Typography>Budget : {budget}</Typography>}
                    {vote_average && <Typography>vote average: {vote_average}</Typography>}
                    {vote_count && <Typography>vote count: {vote_count}</Typography>}
                    <Typography>Original Title : {original_language}</Typography>
                    {runtime && <Typography>Runtime:{runtime}</Typography>}
                    {release_date && <Typography>Release Date: {release_date}</Typography>}
                </section>
                <section>
                {adult && 'Adult'}
                    {popularity && <Typography>popularity: {popularity}</Typography>}
                    <div> Languages {spoken_languages && spoken_languages.map((lang, idx) => <Typography display={'flex'} key={idx}>{lang.english_name}</Typography>)}</div>
                    
                    {homepage && <Link href={homepage}><Button >website</Button></Link>}
                </section>


            </div>
        </div>

    )
}
