
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { actions } from '@/store'
import { storeData } from '@/Types'
import MovieSection from '@/Holders/MovieSection'
import { useRouter } from 'next/router'
import  Loading  from '@/Holders/Loading'
import Layout from '@/components/layout/Layout'
import { Paper, Typography } from '@mui/material'
export default function Search() {

 const router = useRouter()
const page = router.query.page || '1'
const search = router.query.search || 'avengers'
const apiKey = process.env.NEXT_PUBLIC_API_KEY
const baseUrl = 'https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&page=${page}'
const dispatch = useDispatch()
const {loading,data} = useSelector((store:storeData)=>store.data)
async function  fetchData(){
       const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${search}&api_key=019e50740204171f55b9962890f04b04&language=en-US&page=${page}`)
       const data = await response.json()
       return data
}
useEffect(()=>{
  dispatch(actions.setLoading(true))
  fetchData().then(data=>{
    dispatch(actions.getData(data))
    dispatch(actions.setLoading(false))
    console.log(data)
  })
  
},[page,search])
if(loading){
  return <>
  <Loading/>
  </>
}
  return (
    <>
    

    <Paper sx={{display:'flex',justifyContent:'center',alignContent:'space-between'}}>
      <Typography>Total Pages : {data.total_pages}</Typography>
     <Typography>Total Results {data.total_results}</Typography>
    </Paper>
      <MovieSection data={data}/>
   
    </>
  )
}

