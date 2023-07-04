import React, { useState ,useContext} from 'react'
import NavLinks from '@/components/Elements/Headers/NavLinks'
import Hamburger from '@/components/Elements/Headers/Hamburger'
import SearchBox from "@/components/Elements/Headers/SearchBox"
import Sidebar from './Sidebar'


import { Paper, Switch, Button ,} from '@mui/material'
import { DataContext } from '@/context/context'
import { LightModeRounded,  DarkModeRounded, } from '@mui/icons-material/'
interface props {
  mode: boolean;
  setMode: () => void
}
const Header = ({ mode, setMode }: props) => {
  const {total_pages} = useContext(DataContext)
  const [open, setOpen] = useState(false)
  const Modal = () => {
    setOpen(prev => !prev)
  }
  const [ShowHamburger, setShowHamburger] = useState(false)
  return (
    <Paper sx={{ borderBottom: '5px solid red' }} className='flex  flex-col sm:flex-row justify-between items-center'>

      {ShowHamburger && <Sidebar isOpen={ShowHamburger} onClose={() => setShowHamburger(false)} />}
      <Hamburger open={ShowHamburger} onClick={() => setShowHamburger(prev => !prev)}  />
      
        <NavLinks />
        <SearchBox />
     
      <div className='flex justify-around'>

        
        <Switch checked={mode} onChange={setMode} icon={<LightModeRounded />} checkedIcon={<DarkModeRounded />} className='p-2'/>
      </div>

    </Paper>
  )
}


export default Header