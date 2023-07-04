
import { useRouter } from 'next/router'
import {useSelector} from 'react-redux'
import {Pagination} from '@mui/material'
import {storeData} from './../../../Types'

const PrevNext = () => {
  const page = useSelector((store:storeData)=>store.data.data.page) || 1
  const totalPage = useSelector((store:storeData)=>store.data.data.total_pages)
  const router = useRouter()
  
  const searchText = router.query.search
  const category = router.query.category
  let finalQuery = ''
if(category!==undefined){
  finalQuery='&category='+category
}
if(searchText!==undefined){
  finalQuery='&search='+searchText
}
const changeHandler = (event: React.ChangeEvent<unknown>, value: number)=>{
  router.push(`?page=${value}`+finalQuery)
}
  return (
   
      <Pagination count={totalPage} onChange={changeHandler} page={page} />
   
  )
}

export default PrevNext