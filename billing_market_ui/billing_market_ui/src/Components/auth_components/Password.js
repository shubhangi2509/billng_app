import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';


function Password() {
  const {register, handleSubmit, formState:{errors}} = useForm();
  const navigate = useNavigate();

  const token = sessionStorage.getItem('access_token')

  async function saveData(data){
    try{
      const resp = await axios.put('http://localhost:8000/auth/api/change-password/',data,{
        headers:{'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}`}});
        console.log('status 1 ===',resp.status);

      if(resp.status === 205){
        alert('Password Changed successfully!!')
        // navigate('/ceo');
      }
      else{
        alert('Bad Request');
      }
      console.log(resp)
  } 
  catch(err){
    alert(err.message)
  }

  }

  return (
    <>
    <br/><br/>
      <form className='container bg-light' onSubmit={handleSubmit(saveData)}>
        <center><u><h1>CHANGE PASSWORD</h1></u></center>
        <br/>
        <br/>

        <br/>
        <label htmlFor='pw'>OLD Password</label>
        <input type='password' id='pw' className='form-control' {...register('old_password',{
          required:{value:true, message:"This field is required"},
          pattern:{
            value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W]).{8,16}$/,
            message:"Password is not valid"
          }
        })} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'old_password'}></ErrorMessage></p>


        <label htmlFor='npw'>NEW Password</label>
        <input type='password' id='npw' className='form-control' {...register('new_password',{
          required:{value:true, message:"This field is required"},
          pattern:{
            value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W]).{8,16}$/,
            message:"Password is not valid"
          }
        })} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'new_password'}></ErrorMessage></p>

 
        <br/>
        <input type='submit' value='Change Password' className='btn btn-outline-success btn-lg col-6' />
        <input type='reset' value='RESET' className='btn btn-outline-warning btn-lg col-6' />
        </form>
        
        <br/>
        <br/>
        <br/>
        <br/>
    </>
  );
}

export default Password;