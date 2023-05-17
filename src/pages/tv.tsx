
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router';
import {Data,storeData} from '@/Types'
import MovieSection from '@/Holders/MovieSection'
import { useDispatch, useSelector } from 'react-redux';
import {actions} from './../store'
export default function Home() {
  

 const router = useRouter()
const page = router.query.page || '1'
const category = router.query.category || 'on_the_air'
const apiKey = process.env.NEXT_PUBLIC_API_KEY
const baseUrl = 'https://api.themoviedb.org/3/tv/${ask}?api_key=${api_key}&language=en-US&page=${page}'
const dispatch = useDispatch()
const {loading,data} = useSelector((store:storeData)=>store.data)
async function  fetchData(){
       const response = await fetch(`https://api.themoviedb.org/3/tv/${category}?api_key=${apiKey}&language=en-US&page=${page}`)
       const data = await response.json()
       return data
}
useEffect(()=>{
  dispatch(actions.setLoading(true))
  fetchData().then(data=>{
    dispatch(actions.getData(data))
    dispatch(actions.setLoading(false))
  })}
  ,[category,page])
  console.log(data)
  return (
    <>
    
      <MovieSection data = {data} />

      
    </>
  )
}

// export async function getServerSideProps(context:any) {
//   const api_key = process.env.NEXT_PUBLIC_API_KEY;
//   console.log(context.query)
//     const page = context.query.page?context.query.page:'1'
//     const ask = context.query.ask?context.query.ask:'on_the_air'
    
//   const callApi= async ()=>{
    
//   const BASE_URL=`https://api.themoviedb.org/3/tv/${ask}?api_key=${api_key}&language=en-US&page=${page}`

//     const result = await fetch(BASE_URL)
//     const data = await result.json()
//     return data
//   }
//   const data = await callApi()
//   // const data = "hellow ji"
//   return {
//     props: {data}, // will be passed to the page component as props
//   }
// }