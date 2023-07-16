
import {useState,useEffect} from 'react'
import Header from '@/Holders/Header'
import { createTheme,Paper,Theme,ThemeProvider } from '@mui/material'
import Context from '@/context/ContextComponent'
import Footer from '@/Holders/Footer'
let themeMode:Theme;
const Layout = ({mode,setMode,children}:{mode:boolean,setMode:()=>void,children:React.ReactNode}) => {
 

  return (
    <>
    
      <Context>
        <div className='flex flex-col  justify-center'>

      <Header mode={mode} setMode={setMode}/>
        {children}
      <Footer />
      </div>
      </Context>

    
    </>
  )
}
export {themeMode}
export default Layout