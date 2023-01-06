import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
const SignUp = () => {
  const [logindata,setLoginData]=useState({  
    email:"",
    password:""
  })
  const navigates=useNavigate()
  const[errors,setErrors]=useState({})
  const[issubmit,setSubmit]=useState(false)
  function validate(values){
    const errors={}
      const regex= /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i 
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
  function handleLoginChange(event){
      const {name,value}=event.target;
      setLoginData({...logindata,[name]:value})
      setErrors(validate({...logindata,[name]:value}))
  }
  function handleLoginSubmit(event){
    event.preventDefault();
    setErrors(validate(logindata)) 
   setSubmit(true)
  }
  return (
    <div className="split-screen">
        <div className="login-left">
                <section className='copy'>
                  <h1>Explore Our universities</h1>
                  <p>Over 1000 Universities and Colleges</p>             
                </section>
        </div>
        <div className="right">
          <form action="" onClick={handleLoginSubmit}>
              <section className='copy'>
                      <h2>LOG IN</h2>
                  <div className="login-container">                   
                  </div>
              </section>                
                  <div className="input-container email">
                      <label htmlFor="email">Email</label>
                      <input id='email' name='email' type="email" value={logindata.email} onChange={handleLoginChange}/>
                      {errors.email && <p>{errors.email}</p>}
                  </div>
                  <div className="input-container password">
                      <label htmlFor="password">Password</label>
                      <input id='password' name='password' type="password" value={logindata.password} onChange={handleLoginChange}/>
                      {errors.password && <p>{errors.password}</p>}
                  </div>         
                    <button  onClick={Object.keys(errors).length===0 && issubmit ?navigates("/"):null} className='signup-btn' type='submit'>Login</button>                 
          </form>
         </div>
    </div>
  )
}
export default SignUp