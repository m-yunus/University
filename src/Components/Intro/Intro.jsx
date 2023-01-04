import React, { useEffect,useRef, useState } from 'react'
import "./intro.css"
import {init} from "ityped"
import ItemData from '../ItemData/ItemData';
import { UniversityList } from '../Context/Context'

const Intro = ({search,setSearch}) => {
    const textref=useRef()
    const{loading,data}=UniversityList()
    
    const [searchedItems,setSearchedItems]=useState([])
        function setSearchhandler(){
                   const FilteredItems=data.filter((items,i)=>
          { 
            return (
              (
                items.name.toLowerCase().includes(search) ||
                 items["state-province"]?.toLowerCase().includes(search)      
                 )&& i<=403
                 )
            
          }  
        )
          setSearchedItems(FilteredItems)   
    }
    console.log(search,searchedItems);
  useEffect(()=>{
      init(textref.current,{
        showCursor:false,
        backDelay:1500,
        strings:["1000+ UNIVERSITIES ","250+ EXAMS "," 1 LAKH REVIEWS"]
      })
  },[])
  return (
    <div className='intro' style={loading?{visibility:"hidden"}:{visibility:"visible"}}>
          <div className="ityped-intro">
                <h1 >FIND OVER <span ref={textref}></span></h1>
          </div>
          <div className="search_bar">
                 <input type="text" className='serchbar-input' placeholder='search for universities'onKeyDown={setSearchhandler} onChange={(e)=>{setSearch(e.target.value)} }/>
                 <button onClick={()=>setSearchhandler()} >search</button>
          </div>
          <ItemData searchedItems={searchedItems} search={search} setSearch={setSearch}/>
    </div>
  )
}
export default Intro