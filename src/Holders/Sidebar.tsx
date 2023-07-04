import {useState} from 'react'
import { useRouter } from "next/router"
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { Popover,Drawer,IconButton,Divider,List,ListItem,ListItemButton,ListItemText,ListItemIcon, Modal} from "@mui/material"

import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
interface props{
  isOpen:boolean,
  onClose:()=>void
}
const Sidebar = ({isOpen,onClose}:props) => {
  const router = useRouter()
 const tv =  router.pathname.slice(1)
 console.log(tv)
 
const theme = useTheme();
const [open, setOpen] = useState(false);



const handleDrawerClose = () => {
  setOpen(false);
};
  return (
  
<>
    <Popover open={isOpen} onClose={onClose} sx={{width:'20vw',height:"100vh"}}>
        <ul className="flex flex-col align-middle"> 
            <Link href='?category=popular'>popular</Link>
            <Link href='?category=top_rated'>Top-rated</Link>
            <Link href={tv?'tv?category=on_the_air':'?category=now_playing'}>{tv?'on-the-air':'now-playing'}</Link>
            <Link href={tv?'tv?category=airing_today':'?category=upcoming'}>{tv?'airing-today':'upcomming'}</Link>
        </ul>
      </Popover>
    
</>
    
  )
}

export default Sidebar
