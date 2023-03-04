import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist'

function Delete() {
                            const {userId} = useParams()

                           const [user,setUser]  = useState({})


                           const navigate = useNavigate();


                           async function fetchAllUser(){
                            const result = await axios.get(`http://localhost:8000/api/stock/${userId}/`);
                            setUser(result.data);
                           }



                          async function deleteUser(){
                           await axios.delete(`http://localhost:8000/api/stock/${userId}/`);
                            navigate('/user/show');
                           }

                           useEffect(()=>{
                            fetchAllUser();
                           },[])


  return (
    <>
        <div className='container jumbotron'>
            <center><h1><u>DELETE CONFORMATIN STOCK</u></h1></center>
            <form onSubmit={()=>deleteUser()}className='mt-5'>
            <h3>DO You Want To Delete<span style={{color:"red"}}>{user.product_name}{user.product_category}{user.product_quantity}{user.product_cost_per_quantity}</span>record ?</h3>
            <input type='submit' value='YES' className='btn btn-outline-danger  col-6 mt-4'/>
            <NavLink to='/user/show'><input type='button' value='NO' className='btn btn-outline-warning col-6 mt-4'/></NavLink>    

            </form>


        </div>
    
    </>
  )
}

export default Delete;