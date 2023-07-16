import { Typography, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
const NavLinks = () => {
  const router = useRouter()
  const handleChange=(e:SelectChangeEvent<string>)=>{
        router.push(e.target.value)
  }
  return (
    <div className='flex sm:gap-3 gap-1'>

      <div className='flex flex-col items-center'>
        <Link href='/' className='ml-4 sm:p-4 hover:text-red-300 font-thin'>Movies</Link>
        <Select onChange={(e:SelectChangeEvent)=>router.push(e.target.value)} label='category' value='select' className='h-4 w-12'>
          <MenuItem value='/?category=popular'>popular</MenuItem>
          <MenuItem value='/?category=top_rated'>top rated</MenuItem>
          <MenuItem value='/?category=now_playing'>now playing</MenuItem>
          <MenuItem value='/?category=upcoming'>upcomming</MenuItem>
        </Select>
      </div>
      <div className='flex flex-col items-center'>
        <Link href='/tv' className='sm:p-4 hover:text-red-300'>Tv</Link>
        <Select onChange={(e:SelectChangeEvent)=>router.push(e.target.value)} label='category' className='h-4 w-12'>
          <MenuItem value='/tv?category=popular'>popular</MenuItem>
          <MenuItem value='/tv?category=top_rated'>top rated</MenuItem>
          <MenuItem value='/tv?category=on_the_air'>on the air</MenuItem>
          <MenuItem value='/tv?category=airing_today'>airing today</MenuItem>
        </Select>
      </div>
    </div>

  )
}

NavLinks.propTypes = {}

export default NavLinks