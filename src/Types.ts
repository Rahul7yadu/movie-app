export const baseUrl = 'https://api.themoviedb.org/3/'
export type Data = {
  results:[],
  page:number,
  total_pages:number,
  total_results:number

}
export type storeData = {
data:{
  loading:boolean,
  data:Data
}
}
export type cast = {
  adult:boolean,
  gender:number,
  id:number,
  known_for_department:string,
  name:string,
  original_name:string,
  popularity:number,
  profile_path:string,
  cast_id:number,
  character:string,
  credit_id:string,
  order:number,
  }

export type castResponse = {
  id:number,
  cast:{
  adult:boolean,
  gender:number,
  id:number,
  known_for_department:string,
  name:string,
  original_name:string,
  popularity:number,
  profile_path:string,
  cast_id:number,
  character:string,
  credit_id:string,
  order:number,
  }[],
  crew:{
  adult:boolean,
  gender:number,
  id:number,
  known_for_department:string
  name:string
  original_name:string
  popularity:number
  profile_path:string,
  credit_id:string,
  department:string,
  job:string
  }[]
  }



  type Movie = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    character?: string;
    credit_id?: string;
    order?: number;
  };
  
  type Crew = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credit_id: string;
    department: string;
    job: string;
  };

  export type MovieWithCast = {
    cast:Movie[],
    crew:Crew[]
  }

  export type Person = {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday: string | null;
    gender: number;
    homepage: string | null;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string | null;
  };


 