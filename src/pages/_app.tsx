import '@/styles/globals.css'
import Layout from '@/components/layout/Layout'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider, createTheme } from '@mui/material'
import { store } from './../store'
import { Provider } from 'react-redux'
export default function App({ Component, pageProps, ...appProps }: AppProps) {
  const [mode, setMode] = useState(false)

  const changeMode = () => {
    setMode(prev => !prev)
  }
  const theme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light'
    }
  })
  const router = useRouter()
  console.log(router.asPath)
  if(router.asPath.includes('/movie/')||router.asPath.includes('/tv/')){
    return <Provider store = {store}>
      <ThemeProvider theme={theme}>
      <Component {...pageProps}/>
      </ThemeProvider>
    </Provider>
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout mode={mode} setMode={changeMode}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}
