

import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function ListUser(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        getUsers();

    }, [])
  const getUsers=async()=>{
    const result=await axios.get('http://localhost/php/task/functionget.php');
    setUsers(result.data);



    }
  
    
    
   


  

 




   
      
        return(
            <>
        

        <div>
            <h3>ListUser</h3>
            <table border={2}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>email</th>

                    <th>mobile</th>
                    <th>Actions</th>
</tr>
</thead>
<tbody>
   { users.map((user,key)=>
    <tr key={key}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td>
            <Link to={`user/(${user.id})/edit`}>Edit</Link>
            console.log(key($user,id));
            <button 

            >Delete</button>
        </td>

    </tr>
  )}
</tbody>

            
            </table>
        </div>
        </>
    )
   }
