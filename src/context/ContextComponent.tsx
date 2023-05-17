import { useState, useEffect, useContext } from 'react'
import { context, DataContext } from './context'
let values = {}
export type Data = {
  results:[],
  page:number,
  total_pages:number,
  total_results:number
}
const Context = ({ children }: any) => {
  const [data,setData] = useState({
    results:{},
    page:0,
    total_pages:0,
    total_results:0
  })
  const updateData = (data:Data)=>{
    setData(data)
  }
   values =  useContext(DataContext)

  return (
    <DataContext.Provider
      value={{ ...data,setContextData:updateData}}>
      {children}
    </DataContext.Provider>
  )
}
export {values}
export default Context
