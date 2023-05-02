import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch} from 'react-redux'
import {loginUser, registerUser} from '../actions/userAction'

export default function Loginscreen() {
 
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

const dispatch = useDispatch();

useEffect(()=>{
if(localStorage.getItem('currentUser')){
  window.location.href='/'
}
},[])

function login(){
const user={email,password}
dispatch(loginUser(user))
}


  return (
    <div>
      
      <div className='row justify-content-center mt-5'>

        <div className='col-md-5 mt-5 text-left'>
          <h4>Login Here...</h4>
               <div className='text-left'>
                
                  <input type='text'
                   placeholder='Email'
                    className='form-control'
                   
                    value={email}
                    required
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                  <input type='text'
                   placeholder='Password'
                    className='form-control'
                 
                    value={password}
                    required
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                  

                  <button className='reg-btn' onClick={login}> Login</button>

                </div>
          </div>
      </div>
    </div>
  )
}


