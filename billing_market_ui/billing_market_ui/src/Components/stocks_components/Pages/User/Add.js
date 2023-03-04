import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Add() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    async function saveData(data){
        const resp = await axios.post('http://localhost:8000/api/stock/', data);
        console.log(resp.data)
        navigate ('/user/show')
    }


  return (
    <>
        <div className='container jumbotron'>
            <center><h1 style={{color:'red'}}><u>Stock Items Addition</u></h1></center>
            <form onSubmit={handleSubmit(saveData)}>
                <label htmlFor='product_name'><b>Product Name:</b></label>
                <input type='text' id='product_name' className='form-control' {...register('product_name')}/>
                <br/>
                <br/>
                <label htmlFor='product_category'><b>Product Category:</b></label>
                <input type='text' id='product_category' className='form-control' {...register('product_category')}/>
                <br/>
                <br/>
                <label htmlFor='product_quantity'><b>Product Quantity:</b></label>
                <input type='number' id='product_quantity' className='form-control' {...register('product_quantity')}/>
                <br/>
                <br/>
                <label htmlFor='product_cost_per_quantity'><b>Product Cost Per Quantity:</b></label>
                <input type='number' id='product_cost_per_quantity' className='form-control' {...register('product_cost_per_quantity')}/>
                <br/>
                <br/>
                <label htmlFor='product_gst'><b>Product GST:</b></label>
                <input type='text' id='product_gst' className='form-control' {...register('product_gst')}/>
                <br/>
                <br/>
                <label htmlFor='product_cost_with_gst'><b>Product Cost with GST:</b></label>
                <input type='number' id='product_cost_with_gst' className='form-control' {...register('product_cost_with_gst')}/>
                <br/>
                <br/>
                <label htmlFor='product_offer'><b>Product Offer:</b></label>
                <input type='number' id='product_offer' className='form-control' {...register('product_offer')}/>
                <br/>
                <br/>
                <label htmlFor='product_total_cost'><b>Product Total Cost:</b></label>
                <input type='number' id='product_total_cost' className='form-control' {...register('product_total_cost')}/>
                <br/>
                <br/>
                
                <input type='submit' value='Add Stock Items' className='btn btn-outline-success col-6 btn-lg'/>
                <input type='reset' value='RESET' className='btn btn-outline-warning col-6 btn-lg'/>

            </form>
        </div>
    </>
  )
}
