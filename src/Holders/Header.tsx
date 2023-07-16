import NavLinks from '@/components/Elements/Headers/NavLinks'
import SearchBox from "@/components/Elements/Headers/SearchBox"
import Icon from '@/components/Elements/Headers/Icon'

import { Paper, Switch, Button ,} from '@mui/material'
import { LightModeRounded,  DarkModeRounded, } from '@mui/icons-material/'
interface props {
  mode: boolean;
  setMode: () => void
}
const Header = ({ mode, setMode }: props) => {
  
  return (
    <Paper className='flex flex-col  sm:flex-row justify-around items-start sm:items-center border-b-4 border-red-600 sm:h-28 gap-y-2 '>
     
<div className='flex justify-around  w-full'>

        <Icon/>
        <NavLinks />
</div>
     
      <div className='flex justify-around w-full'>
        <SearchBox />
           <Switch checked={mode} onChange={setMode} icon={<LightModeRounded />} checkedIcon={<DarkModeRounded />} className='p-2'/>
      </div>
      

    </Paper>
  )
}


export default Header