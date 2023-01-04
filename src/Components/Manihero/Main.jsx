import React,{  useState }from 'react'
import "./Main.css"
import Intro from '../Intro/Intro';
import {Link} from "react-router-dom"
import {FaUniversity,FaSchool} from "react-icons/fa"
const Main = () => {
  const [search,setSearch]=useState("")

  function ShowOptionhandler(event){
    setSearch(event.target.value)
  } 
  
  return (
    <div className='main'>   
               
          <div className="nav-left">
                <div className="data-options">
                   <Link to="data-tables"><h4><FaUniversity/>Univesities</h4></Link>
                    <h4><span><FaSchool/></span> admissionn</h4>
                    <h3>filter with state</h3>
<select onChange={ShowOptionhandler} >
        <option value="andhra pradesh">Andhra Pradesh</option>
        <option value="arunachal pradesh">Arunachal Pradesh</option>
        <option value="assam">Assam</option>
        <option value="bihar">Bihar</option>
        <option value="chhattisgarh">Chhattisgarh</option>
        <option value="gujarat">Gujarat</option>
        <option value="haryana">Haryana</option>
        <option value="himachal pradesh">Himachal Pradesh</option>
        <option value="jammu and kashmir">Jammu and Kashmir</option>
        <option value="goa">Goa</option>
        <option value="goa">Goa</option>
        <option value="karnataka">Karnataka</option>
        <option value="kerala">Kerala</option>
        <option value="MP">Madhya Pradesh</option>
        <option value="MH">Maharashtra</option>
        <option value="MN">Manipur</option>
        <option value="ML">Meghalaya</option>
        <option value="MZ">Mizoram</option>
        <option value="NL">Nagaland</option>
        <option value="OR">Odisha</option>
        <option value="punjab">Punjab</option>
        <option value="rajasthan">Rajasthan</option>
        <option value="sikkim">Sikkim</option>
        <option value="tamil nadu">Tamil Nadu</option>
        <option value="telangana">Telangana</option>
        <option value="tripura">Tripura</option>
        <option value="uttarakhand">Uttarakhand</option>
        <option value="UP">Uttar Pradesh</option>
        <option value="WB">West Bengal</option>
        <option value="AN">Andaman and Nicobar Islands</option>
        <option value="CH">Chandigarh</option>
        <option value="DN">Dadra and Nagar Haveli</option>
        <option value="DD">Daman and Diu</option>
        <option value="DL">Delhi</option>
        <option value="LD">Lakshadweep</option>
        <option value="PY">Puducherry</option>
</select>
                
</div>
                     </div>
                     <div className="nav-right">
                              
                         
                                    <ul className='nav-list'>
                                      <Link to="/signup" > <button>signup</button></Link>
                                    </ul>
                            
                            <Intro search={search} setSearch={setSearch}/>
                     </div>
    </div>
  )
}

export default Main