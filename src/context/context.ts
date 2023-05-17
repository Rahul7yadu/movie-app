import React,{ createContext, SetStateAction, useState } from "react";
import { Data } from "./ContextComponent";
export const context = createContext({
    state:{},
    changeValue:(input:any)=>{}
})
export const DataContext = createContext({
    page:0,
   results:{},
   total_pages:0,
   total_results:0,
setContextData:  (data:Data)=>{

}
})




 

