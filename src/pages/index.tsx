import {useState,useEffect} from 'react'
import { useRouter } from 'next/router';

import {Data,storeData} from '@/Types'
import MovieSection from '@/Holders/MovieSection'
import { useDispatch, useSelector } from 'react-redux';
import {actions} from './../store'
export default function Home() {
 const router = useRouter()
const page = router.query.page || '1'
const category = router.query.category || 'now_playing'
const apiKey = process.env.NEXT_PUBLIC_API_KEY
const baseUrl = 'https://api.themoviedb.org/3/tv/${ask}?api_key=${api_key}&language=en-US&page=${page}'
const dispatch = useDispatch()
const {loading,data} = useSelector((store:storeData)=>store.data)
async function  fetchData(){
       const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=${page}`)
       const data = await response.json()
       return data
}
useEffect(()=>{
  dispatch(actions.setLoading(true))
  fetchData().then(data=>{
    dispatch(actions.getData(data))
    dispatch(actions.setLoading(false))
  })
    
    
},[page,category])
if(loading){
  return <div className='w-full h-screen flex flex-col justify-center items-center text-4xl  text-white text-bold'>
   ...Loading 
  </div>
}
  return (
    <>
    

    
      <MovieSection data={data}/>
    </>
  )
}








