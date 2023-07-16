import Link from 'next/link'
import { useState} from 'react'
import { Button, Input } from '@mui/material'
import { useRouter } from 'next/router'

 const SearchBox = () => {
  const router = useRouter()
  const [input,setInput] = useState("")
  const handleChange = (e:string)=>{
    setInput(e)
  }
  const submitHandler=(e:string)=>{
    if(e==='Enter' && input!==''){
      router.push('/search?search='+input)
    }
   
  }
  return (
  <div className=''>
        <Input name='search' type="text" placeholder='search'  onChange={(e)=>handleChange(e.currentTarget.value)} onKeyUp={(e)=>submitHandler(e.key)} />
        <Link href={input?'/search'+'?search='+input:''} ><Button >search</Button></Link>
  </div>
  
  )
}

export default SearchBox
