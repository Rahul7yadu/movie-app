import React,{useContext} from 'react'
import {useSelector} from 'react-redux'
import {Paper,Button,Stack} from '@mui/material'
import PrevNext from '@/components/Elements/Footers/PrevNext'
import JumpPage from '@/components/Elements/Footers/JumpPage'
import { storeData } from '@/Types'

const Footer = () => {
  const {page,total_pages}=useSelector((store:storeData)=>store.data.data)
  return (
    <Paper sx={{display:'flex',justifyContent:'space-around',borderTop:'red 2px solid',paddingTop:'10px'}}>
      <Stack spacing={2}>

        {/* {page} of {total_pages} */}
        <PrevNext/>
        <JumpPage total_pages={total_pages}/>
      </Stack>
    </Paper>
  )
}

export default Footer