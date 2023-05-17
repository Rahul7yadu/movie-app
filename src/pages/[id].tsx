
import Image from "next/image"
import Link from "next/link"
import Card from "@/components/Card"

type Data={
  adult:boolean;
  backdrop_path:string;
  belongs_to_collection:{ id: 94602, name: 'Puss in Boots Collection', poster_path: '/anHwj9IupRoRZZ98WTBvHpTiE6A.jpg', backdrop_path: '/feU1DWV5zMWxXUHJyAIk3dHRQ9c.jpg' };
  budget:number,
  
homepage:"https://www.dreamworks.com/movies/puss-in-boots-the-last-wish";
id:
315162;
imdb_id:"tt3915174";
original_language:"en"
original_title:"Puss in Boots: The Last Wish"
overview:"Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives."
popularity:2570.552
poster_path:"/kuf6dutpsT0vSVehic3EZIqkOBt.jpg";
production_companies:Array<object>;
production_countries:Array<object>;
release_date:string;
revenue:number
runtime:number
spoken_languages:Array<object>
status:string;
tagline:string;
title:string;
video
:
boolean;
vote_average
:
number;
vote_count
:
number;
}
const singleMovie = ({ data }: {data:Data}) => {


  const ImageUrl = 'https://image.tmdb.org/t/p/original/'


  console.log({ data })
  return (

    <div className="relative">
      {data.backdrop_path != ''
        && data.backdrop_path != undefined
      && <div>
      
        <img  src={ImageUrl + data.backdrop_path}
          alt="background"
          className="opacity-70 backdrop:blur-lg w-full h-full"
        />
        </div>}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-lg ">
          <h1 className="text-3xl font-bold text-gray-300 shadow-lg text-center">

          {data.tagline}
          </h1>
        </div>
      <div>

      <div className="">
      <div> Runtime: {data.runtime} minutes</div> 
      <div>  Revenue: {data.revenue&&data.revenue.toString().split("")} $</div>
      <div>Budget: {data.budget} $</div>
      <div>Vote count: {data.vote_count}</div>
      </div>
      </div>
    </div>

  )
}

export default singleMovie

export const getServerSideProps = async (context: any) => {
  console.log(context.id)
  const id = context.id
  const search = context.query.search
  const baseUrl = 'https://api.themoviedb.org/3/'
  const api_key = process.env.NEXT_PUBLIC_API_KEY
  const callApi = async () => {
    let result;


    result = await fetch(`https://api.themoviedb.org/3/${'tv'}/${id}?api_key=${api_key}&language=en-US`)

    const data = await result.json()
    return data
  }
  const data = await callApi()
  return {
    props: { data }
  }
}