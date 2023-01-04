import React, { useEffect, useState,} from 'react'
import "./Signup.css"
import {Link} from "react-router-dom"
import {useNavigate } from 'react-router-dom';
const Signup = () => {
  const [formdata,setFormData]=useState({
    fname:"",
    email:"",
    password:""
  })
  const navigate=useNavigate()
  const[errors,setErrors]=useState({})
  const[issubmit,setSubmit]=useState(false)
  function validate(values){
    const errors={}
      const regex= /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i
      if(!values.fname){
        errors.fname="name is required"
      }
      if(!values.email){
        errors.email="Email is Required"
      }
      else if(!regex.test(values.email)){
        errors.email="Invalid email format"
      }
      if(!values.password){
          errors.password="password is required"
      } 
      return errors;
  }
  function handleChange(event){
      const {name,value}=event.target;
      setFormData({...formdata,[name]:value})
      console.log(formdata);
      setErrors(validate({...formdata,[name]:value}))
  }
  function handleSubmit(event){
    event.preventDefault();
    setErrors(validate(formdata))
   console.log(errors);
   setSubmit(true)
  

  }
  

  return (
    <div className="split-screen">
        <div className="left">
                <section className='copy'>
                  <h1>Explore Our universities</h1>
                  <p>Over 1000 Universities and Colleges</p>             
                </section>
        </div>
        <div className="right">
          
          <form action="" onSubmit={handleSubmit}>
              <section className='copy'>
                      <h2>SignUp</h2>
                  <div className="login-container">
                      <p>Already have an Account? <Link to="/login"><strong>Login</strong></Link></p>
                  </div>
              </section>
                  <div className="input-container name">
                      <label htmlFor="fname">Full name</label>
                      <input id='fname' name='fname' type="text" value={formdata.fname} onChange={handleChange} />
                      {errors.fname && <p>{errors.fname}</p>}
                  </div>
                  <div className="input-container email">
                      <label htmlFor="email">Email</label>
                      <input id='email' name='email' type="email" value={formdata.email} onChange={handleChange}/>
                      {errors.email ? <p>{errors.email}</p>:null}
                  </div>
                  <div className="input-container password">
                      <label htmlFor="password">Password</label>
                      <input id='password' name='password' type="password" value={formdata.password} onChange={handleChange} />
                      {errors.password ? <p>{errors.password}</p>:null}
                  </div>
                  <div className="input-container cta">
                    <label htmlFor="" className='checkbox-container'>
                      <input type="checkbox" />
                      <span className='checkmark'></span>
                      Sign up for email updates
                    </label>
                  </div>
                  {Object.keys(errors).length===0 && issubmit ?(<div>Signed in successfully</div>):(null)}
              <button className='signup-btn'  type='submit' onClick={Object.keys(errors).length===0 && issubmit ?navigate("/"):null}>Sign Up</button>
                   
          </form>

         </div>
    </div>
  )
}

export default Signup