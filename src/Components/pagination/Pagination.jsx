import React, { useEffect, useState } from 'react'
import { UniversityList } from '../Context/Context'
import "./Pagination.css"
const Pagination = ({ItemsperPage,setCurrentPage,searchedItems,search}) => {
      const {data}=UniversityList()
     
    // const pageslength= searchedItems.length!==0?data.length / ItemsperPage :searchedItems.length / ItemsperPage 
        
    const no_ofpages=[]
    for(let i =1;i<Math.ceil(data.length / ItemsperPage); i++) {
      no_ofpages.push(i)
    }
     
        console.log(no_ofpages);
              function ShowNextPage(event){
               
               return setCurrentPage(event.target.id)
              }
        let pages=no_ofpages.map((pageno,index)=>{
         
          return <li key={index} id={pageno} onClick={ShowNextPage}>{pageno}</li>
        })

        
  return (
    
  
 <ul className={searchedItems.length!==0 && search.length!==0? "notvisible_page":"pagination"} >
      {pages}
    </ul>
    
   
  )
}

export default Pagination