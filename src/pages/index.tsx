import { useRouter } from 'next/router';
import MovieSection from '@/Holders/MovieSection'
import { useDispatch } from 'react-redux';
import {actions} from './../store'
import Loading from '@/Holders/Loading';
import { useGetMoviesQuery } from '@/services/DataApi';

export default function Home() {
const router = useRouter()
const page = router.query.page?.toString() || '1'
const category = router.query.category?.toString() || 'now_playing'

const dispatch = useDispatch()



const {data:rtkData,isLoading} = useGetMoviesQuery({category,page})
if(!isLoading){

  dispatch(actions.getData(rtkData))
}




if(isLoading){
  return<Loading/>
}
  return (
    <>
      <MovieSection data={rtkData}/>
    </>
  )
}








