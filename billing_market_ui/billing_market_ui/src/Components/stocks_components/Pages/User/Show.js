import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Show() {
    const [users, setUsers]=useState([]);

    async function fetchAllUsers(){
        const result = await axios.get('http://localhost:8000/api/stock/')
        setUsers (result.data);
        console.log(result.data);
    }
    useEffect (()=> {
        fetchAllUsers();
    }, [])
  return (
    <>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Product Quantity</th>
                    <th>Product Cost Per Quantity</th>
                    <th>Product GST</th>
                    <th>Product Cost with GST</th>
                    <th>Product Offer</th>
                    <th>Product Total Cost</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody >
                {
                    users.map(obj =>{
                        return(
                    <tr>
                        <td>{obj.product_name}</td>
                        <td>{obj.product_category}</td>
                        <td>{obj.product_quantity}</td>
                        <td>{obj.product_cost_per_quantity}</td>
                        <td>{obj.product_gst.igst}</td>
                        <td>{obj.product_cost_with_gst}</td>
                        <td>{obj.product_offer}</td>
                        <td>{obj.product_total_cost}</td>
                        
                        <td>
                            <NavLink  to={`/user/update/${obj.product_id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                            <NavLink to={`/user/delete/${obj.product_id}`}><button className='btn btn-outline-danger btn-sm'>DELETE</button></NavLink>
                            
                        </td>
                    </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </>
  )
}