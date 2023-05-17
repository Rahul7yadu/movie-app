
import { useRouter } from 'next/router'
import {useSelector} from 'react-redux'
import {Button,Typography,Paper} from '@mui/material'
import {storeData} from './../../../Types'
import Link from 'next/link'
const PrevNext = ({pageNumber}:any) => {
  const page = useSelector((store:storeData)=>store.data.data.page) || 1
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
  return (
    <Paper sx={{display:'flex'}}>
      <Link href= {page>1?`?page=${page-1}`:`?page=${page}`} >
        <Button size='large'
        disabled={page<=1} 
        >prev</Button>
      </Link>
        <Typography sx={{padding:'5px'}} alignItems={'center'}>
           
            {page}
        </Typography>
        <Link href={`?page=${page+1}`+finalQuery} ><Button >next</Button></Link>
        {/* <Link href={`?page=${page+1}`+searchText?`&search=${searchText}`:' ' + category ? `&category=${category}`:' '}><Button>next</Button></Link> */}
    </Paper>
  )
}

export default PrevNext