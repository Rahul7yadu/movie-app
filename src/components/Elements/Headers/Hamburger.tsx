import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

 const Hamburger = ({open,onClick}:{open:boolean,onClick:any}) => {
  return (
    <button onClick={onClick} className='m-4'>

   {open?
    <CloseIcon >
   
    </CloseIcon>:<MenuIcon/>}
    </button>
  )
}
export default Hamburger