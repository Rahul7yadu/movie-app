import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const NavLinks =() => {
  return (
      <Typography >

    <Link href='/' className='ml-4 p-4 hover:text-red-300'>Movies</Link>
    <Link href='/tv' className='p-4 hover:text-red-300'>Tv</Link>
      </Typography>
  )
}

NavLinks.propTypes = {}

export default NavLinks