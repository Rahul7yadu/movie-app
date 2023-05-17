import Link from 'next/link'
import {ChangeEventHandler, useState} from 'react'
import { Button, Input } from '@mui/material'

 const SearchBox = () => {
  const [input,setInput] = useState("")
  const handleChange = (e:string)=>{
    setInput(e)
  }
  return (
    <form>
        <Input name='search' type="text" placeholder='search'  onChange={(e)=>handleChange(e.currentTarget.value)}/>
        <Link href={input?'/search'+'?search='+input:''} ><Button>search</Button></Link>
    </form>
  )
}

export default SearchBox
