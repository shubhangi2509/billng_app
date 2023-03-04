import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { ErrorMessage } from '@hookform/error-message';
import {useNavigate} from 'react-router-dom';

function Login() {
  const {register, handleSubmit, formState:{errors} } = useForm();
  const navigate = useNavigate();

  async function saveData(data){
    try{
    const resp = await axios.post('http://localhost:8000/token/', data);
    sessionStorage.setItem('access_token',resp.data.access);
    sessionStorage.setItem('refresh_token',resp.data.refresh);
    sessionStorage.setItem('user_role',resp.data.role);
    const user_role = resp.data.role

    if(user_role === 'CEO'){
      navigate('/ceo');
    }
    else if(user_role === 'Manager'){
      navigate('/manager');
    }
    else if(user_role === 'Accountant'){
      navigate('/accountant');
    }
    else if(user_role === 'SalesMan'){
      navigate('/salesman');
    }
    else{
      navigate('/staff');
    }
    
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <form style={{margin:'100px'}} className='container bg-light' onSubmit={handleSubmit(saveData)}>
        <br/>
        <center><u><h1>LOGIN FORM</h1></u></center>
        <br/>
        <label htmlFor='un'>Username</label>
        <input id='un' type='text' className='form-control' {...register('username',
        {required:{value:true,message:'This field is required'}})} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'username'}></ErrorMessage></p>
        <br/>
        <label htmlFor='pw'>Password</label>
        <input id='pw' type='text' className='form-control' {...register('password',{
          required:{value:true,message:'This field is required'}})} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'password'}></ErrorMessage></p>
        <br/>
        <input type='submit' value='LOGIN' className='btn btn-outline-success btn-lg col-6' />
        <input type='reset' value='RESET' className='btn btn-outline-warning btn-lg col-6' />
        <br/>
        <br/>
        <br/>
      </form>
    </>
  );
}

export default Login;