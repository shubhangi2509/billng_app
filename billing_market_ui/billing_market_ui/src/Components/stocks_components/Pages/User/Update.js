import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist';

function Update() {

                    const {userId} = useParams();

                    const {register,setValue,handleSubmit,errors} = useForm()


                    const navigate = useNavigate();


                    async function fetchUser(){
                         const  result = await axios.get(`http://localhost:8000/api/stock/${userId}/`);
                        
                         console.log(result.data)
                         setValue("product_name",result.data.product_name);
                         setValue("product_category",result.data.product_category);
                         setValue("product_cost_per_quantity",result.data.product_cost_per_quantity);
                         setValue("product_gst",result.data.product_gst);
                         setValue("product_cost_with_gst",result.data.product_cost_with_gst);
                         setValue("product_offer",result.data.product_offer);
                         setValue("product_quantity",10);
                         setValue("product_total_cost",result.data.product_total_cost);
                    }

                      const saveData = async data=>{
                        console.log('---------===>', data.product_quantity);
                        if(data.product_quantity < 0)
                        {
                            alert('Product Quantity should not be Negative!!!');
                        }
                        else
                        {
                            const resp = await axios.patch(`http://localhost:8000/api/stock/${userId}/`,data);
                            console.log(resp.data)
                            navigate('/user/show');
                        }    
                    }


                

                    useEffect(()=>{
                        fetchUser();
                    })

                                                            

  return (
    <>
            <div className='container'>
            <center><h1><u>Stock Items Update</u></h1></center>
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
                <input type='number' id='product_quantity' className='form-control' {...register('product_quantity')} />
                
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
                
                <input type='submit' value='Update Stock Items' className='btn btn-outline-success col-6 btn-lg'/>
                <input type='reset' value='RESET' className='btn btn-outline-warning col-6 btn-lg'/>

            </form>
        </div>
    </>
  )
  }
    
    
    

export default Update;