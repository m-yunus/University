import React,{  useState }from 'react'
import "./Main.css"
import Intro from '../Intro/Intro';
import {Link} from "react-router-dom"
import {FaUniversity,FaSchool} from "react-icons/fa"
import { UniversityList } from '../Context/Context';
const Main = () => {
  const {data}=UniversityList()
  const [search,setSearch]=useState("")
  const [searchedItems,setSearchedItems]=useState([])
  function ShowOptionhandler(event){
  let Optiondata=event.target.value
  const OptionFiltered=data.filter(items=>{
    
     return items["state-province"] === Optiondata
  })
  setSearchedItems(OptionFiltered)
  return searchedItems
  } 
  return (
    <div className='main'>                
          <div className="nav-left">
                <div className="data-options">
                   <h4><FaUniversity/>Univesities</h4>
                    <h4><span><FaSchool/></span> admissionn</h4>
                    <h3>filter with state</h3>
                            <select onChange={ShowOptionhandler} >
                                    <option value="Andhra pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and kashmir">Jammu and Kashmir</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option value="Andaman and ">Andaman and Nicobar Islands</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Dadra and Nagar">Dadra and Nagar Haveli</option>
                                    <option value="Dehradun">Dehradun</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                              </select> 
                              {searchedItems.length===0 && <p style={{color:"red",fontSize:"13px"}}> not found in database</p>}               
                  </div>                
            </div>
                            <div className="nav-right">                        
                                    <ul className='nav-list'>
                                        <Link to="/signup" > <button>signup</button></Link>
                                    </ul>                           
                                       <Intro search={search} setSearch={setSearch}  searchedItems={searchedItems} setSearchedItems={setSearchedItems}/>
                             </div>
        </div>
  )
}

export default Main