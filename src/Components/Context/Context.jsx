import React,{createContext, useContext, useEffect, useState} from 'react'
import axios from "axios"
const universityContext=createContext()
const Context = ({children}) => {
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)

    async function Alluniversity(){

             await axios.get("http://universities.hipolabs.com/search?country=India").then(response=>setData(response.data))
                setLoading(false)
            }

            useEffect(()=>{
                Alluniversity()
            },[])

console.log("ok",data);
  return (
    <universityContext.Provider value={{data,loading,setData}}>
        {children}
    </universityContext.Provider>
  )
}

export default Context

export const UniversityList=()=>{
    return useContext(universityContext)
}