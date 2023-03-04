import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';


function UserRegistration() {
  const {register, handleSubmit, formState:{errors}} = useForm();
  const navigate = useNavigate();

  const token = sessionStorage.getItem('access_token')

  async function saveData(data){
    console.log(data)
   
      const resp = await axios.post('http://localhost:8000/auth/register/',data,{
        headers:{'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}`}});
        console.log('data ===',resp.data);

      if(resp.status === 201){
        alert('Employee Added successfully!!')
        navigate('/ceo');
      }
      else{
        alert('Bad Request');
      }
      console.log(resp.data)
  } 
  

  

  return (
    <>
    <br/><br/>
      <form className='container bg-light' onSubmit={handleSubmit(saveData)}>
        <center><u><h1>EMPLOYEE REGISTRATION FORM</h1></u></center>
        <br/>
        <br/>
        <label htmlFor='un'>Username</label>
        <input type='text' id='un' className='form-control' {...register('username', {
          required:{value:true, message:"This field is required"},
          })} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'username'}></ErrorMessage></p>

        <br/>
        <label htmlFor='pw'>Password</label>
        <input type='text' id='pw' className='form-control' {...register('password',{
          required:{value:true, message:"This field is required"},
          pattern:{
            value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W]).{8,16}$/,
            message:"Password is not valid"
          }
        })} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'password'}></ErrorMessage></p>

        <br/>
        <label htmlFor='fn'>First Name</label>
        <input type='text' id='fn' className='form-control' {...register('first_name',{
          required:{value:true,message:'This field is required'},
          pattern:{
          value:/^[A-Z](?=.*[a-z]).{2,19}$/,
          message:'first later must be capital and can contain 3 to 20 charaters'
        }
        })} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'first_name'}></ErrorMessage></p>

        <br/>
        <label htmlFor='ln'>Last Name</label>
        <input type='text' id='ln' className='form-control' {...register('last_name',{
          required:{value:true,message:'This field is required'},
          pattern:{
          value:/^[A-Z](?=.*[a-z]).{2,19}$/,
          message:'first later must be capital and can contain 3 to 20 charaters'
        }
        })} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'last_name'}></ErrorMessage></p>

        <br/>
        <label htmlFor='dob'>Birth Date</label>
        <input type='date' id='dob' className='form-control' {...register('dob')} />

        <br/>
        <label htmlFor='cn'>Contact Number</label>
        <input type='phone' id='cn'  className='form-control' {...register('contact',{
          required:{value:true,message:'This field is required'},
        pattern:{
          value:/^(\+91)(?=.*[0-9]).{10}$/,
          message:'contact number must start with +91 followed by 10 digit contact number'
        }
        })} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'contact'}></ErrorMessage></p>
        
        <br/>
        <label htmlFor='em'>Email</label>
        <input type='email' id='em' className='form-control' {...register('email',{
          required:{value:true,message:'This field is required'},
          pattern:{
          value:/^([_\-.0-9a-zA-Z]+)@([_\-.0-9a-zA-Z]+)\.([a-zA-z.]+)$/,
          message:'invalid email'
        }
        })} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'email'}></ErrorMessage></p>

        <br/>
        <label htmlFor='add'>Address</label>
        <textarea id='add' rows='5' cols='30' className='form-control'{...register('address',{
          required:{value:true,message:'This field is required'},
          minLength:{
          value:10,
          message:'address must contain least 10 charecter'},
          manLength:{
            value:10,
            message:'address can contain max 200 charecters'}
        })} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'address'}></ErrorMessage></p>

        <br/>
        <label htmlFor='ct'>City</label>
        <input type='text' id='ct' className='form-control' {...register('city',{
          required:{value:true,message:'This field is required'},
          pattern:{
          value:/^[A-Z](?=.*[a-z]).{3,19}$/,
          message:'first later must be capital and can contain 4 to 20 charaters'
        }
        })} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'city'}></ErrorMessage></p>

        <br/>
        <label htmlFor='pin'>PIN Code</label>
        <input type='text' id='pin' className='form-control' {...register('pincode',{
          required:{value:true,message:'This field is required'},
          pattern:{
          value:/^[0-9]{6,6}$/,
          message:'PIN-Code must contain 6 digit'
        }
        })} />
        <p className='text-danger fw-bold'><ErrorMessage errors={errors} name={'pincode'}></ErrorMessage></p>

        <br/>
        <select className='form-control' defaultValue='SalesMan' {...register('user_role')}>
          <option value='CEO' >CEO</option>
          <option value='Manager' >Manager</option>
          <option value='SalesMan' >SalesMan</option>
          <option value='Accountant' >Accountant</option>
          <option value='Staff' >Staff</option>
        </select>

        <br/>
        <input type='submit' value='ADD EMPLOYEE' className='btn btn-outline-success btn-lg col-6' />
        <input type='reset' value='RESET' className='btn btn-outline-warning btn-lg col-6' />
        </form>
        
        <br/>
        <br/>
        <br/>
        <br/>
    </>
  );
}

export default UserRegistration;