import React,{useState,useEffect} from 'react'
import './Adduser.css'
import {useForm} from 'react-hook-form'
import axios from 'axios'

export const Adduser = () => {

  let addNewUser=(newUser)=>{
//  save data into json-server


  }
  let {register,handleSubmit,formState:{errors}}=useForm()
  return (
    <div>
<p className='display-3 text-center'>Add New User</p>
   {/* responsive form ===> depending on the screen so we use row */}
   <div className='row'>
<div className='col-11 col-sm-8 col-md-6 mx-auto'>
<form onSubmit={handleSubmit(addNewUser)}>
  {/* name */}
  <div className='mb-3'>
    <label htmlFor='name'>Name</label>
    <input type="text" id='name' className='form-control' {...register("name",{required:true})} />
  {errors.name?.type==="required"&&<p>*name is required </p> }
  </div>
  {/* email */}
  <div className='mb-3'>
    <label htmlFor='email'>Email</label>
    <input type="text" id='email' className='form-control' {...register("email",{required:true})} />
    {errors.email?.type==="required"&&<p>*email is required </p> }
  </div>
  {/* dob */}
  <div className='mb-3'>
    <label htmlFor='dob'>DOB</label>
    <input type="date" id='dob' className='form-control' {...register("dob",{required:true})} />
    {errors.dob?.type==="required"&&<p>*dob is required </p> }
  </div>
  {/* image urls */}
  <div className='mb-3'>
    <label htmlFor='image'>Image</label>
    <input type="text" id='imsge' className='form-control' {...register("image",{required:true})} />
    {errors.image?.type==="required"&&<p>*image is required </p> }
  </div>
  <button className='btn'>ADD</button>
</form>
</div>
   </div>
    </div>
  )
}
