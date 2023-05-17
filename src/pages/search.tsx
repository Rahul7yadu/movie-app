
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { actions } from '@/store'
import { storeData } from '@/Types'
import MovieSection from '@/Holders/MovieSection'
import { useRouter } from 'next/router'

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
  return <h1>
   ...Loading 
  </h1>
}
  return (
    <>
    <div>
      Total Pages : {data.total_pages}
     Total Results {data.total_results}
    </div>
      <MovieSection data={data}/>
    </>
  )
}

// export async function getServerSideProps(context:any) {
//   const api_key = process.env.NEXT_PUBLIC_API_KEY;
//   console.log(context.query)
//   const page = context.query.page?context.query.page:1
//   const callApi= async ()=>{
    
//   const BASE_URL=`https://api.themoviedb.org/3/search/multi?query=${context.query.search}&api_key=${api_key}&language=en-US&page=${page}`

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