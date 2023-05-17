
import {useState,useEffect} from 'react'
import Header from '@/Holders/Header'
import { createTheme,Paper,ThemeProvider } from '@mui/material'
import Context from '@/context/ContextComponent'
import Footer from '@/Holders/Footer'

const Layout = ({children}:any) => {
  const [mode,setMode] = useState(false)
  const changeMode =()=>{
    setMode(prev=>!prev)
  }
  const theme = createTheme({
    palette:{
      mode:mode?'dark':'light'
    }
  })
  return (
    <>
    <ThemeProvider theme={theme}>
      <Context>
      <Header mode={mode} setMode={changeMode}/>
        {children}
      <Footer />
      </Context>
    </ThemeProvider>
    </>
  )
}

export default Layout