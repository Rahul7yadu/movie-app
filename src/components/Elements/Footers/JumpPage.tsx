import Link from 'next/link'

import {Input,Button} from '@mui/material'
import { useRef ,useState} from 'react'
const JumpPage = ({total_pages}:any) => {
  const inputRef = useRef()
  const [page,setPage]=useState('')
  
  return (
    <div className='p-2'>
        <Input name='page' 
         onChange={(e)=>setPage(e.target.value)}
           className='p-4 m-2 rounded-lg text-xl'
           style={{border:'2px solid blue'}}
           />
        <Link href={`?page=${page}`}><Button>Jump</Button></Link>
    </div>
  )
}

export default JumpPage