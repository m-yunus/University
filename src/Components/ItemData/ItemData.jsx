import React, { useState } from 'react'
import { UniversityList } from '../Context/Context'
import Pagination from '../pagination/Pagination'
import "./ItemData.css"

const ItemData = ({searchedItems,search,setSearch}) => {
    const {data}=UniversityList()
    const[currentPage,setCurrentPage]=useState(1)
    const[ItemsperPage,setItemsPerPage]=useState(50.7)
    let indexOflastList=currentPage * ItemsperPage
    let indexOfFirstList=indexOflastList - ItemsperPage
    let showlist=data.slice(indexOfFirstList,indexOflastList)


    const Datareceived=showlist.map((items,index)=>{
     
            return (
                <tr key={index}>
                     <td>{items.name}</td>
                     <td>{items.country}</td>
                     <td>{items?.["state-province"]}</td>
                     <td><a href={items?.web_pages}>{items?.domains}</a></td>
                </tr>     
            )
    })  
    const Searchlist=searchedItems.map((list,index)=>{
        
      return (
        <tr key={index}>
             <td>{list.name}</td>
             <td>{list.country}</td>
             <td>{list?.["state-province"]}</td>
             <td><a href={list?.web_pages}>{list?.domains}</a></td>
        </tr>     
    )
    })
  return (      
                <div className="data-tables">
                        <table>
                            <tbody>
                            <tr>
                                <th>University</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>Website</th>
                            </tr>                              
                                {searchedItems.length!==0 && search.length!==0? Searchlist:Datareceived}
                                </tbody>
                        </table>
                        <Pagination ItemsperPage={ItemsperPage} setCurrentPage={setCurrentPage} searchedItems={searchedItems} search={search}/> 
                </div>
                  
                 
     
  )
}

export default ItemData