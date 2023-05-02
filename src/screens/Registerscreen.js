import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch} from 'react-redux'
import {registerUser} from '../actions/userAction'

export default function Registerscreen() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [cpassword,setCpassword]=useState("")
const dispatch = useDispatch();

function register(){
  if(password !== cpassword){
    alert("password not matched")
  }else{
    const user={
      name:name,
      email:email,
      password:password
    }
    console.log(user);
    dispatch(registerUser(user))
  }
}


  return (
    <div>
      
      <div className='row justify-content-center mt-5'>

        <div className='col-md-5 mt-5 text-left'>
          <h4>Register Here...</h4>
               <div className='text-left'>
                
                  <input type='text'
                   placeholder='Name'
                    className='form-control'
                   
                    value={name}
                    required
                    onChange={(e)=>{setName(e.target.value)}}
                    />
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
                  <input type='text' 
                 
                  placeholder='confirm password' 
                  className='form-control'
                  value={cpassword}
                  required
                  onChange={(e)=>{setCpassword(e.target.value)}}
                  />

                  <button className='reg-btn' onClick={register}> Register</button>

                </div>
          </div>
      </div>
    </div>
  )
}


