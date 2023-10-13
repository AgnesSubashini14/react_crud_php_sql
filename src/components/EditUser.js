
import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'



function Update(){
    const {id}=useParams();
    useEffect(()=>{
        
     axios.get('http://localhost/php/task/functionget.php' + id).then(function(response){
        console.log(response.data);
     })
       

    },[])


return(

    <>
    <div>
      <form>
    <table cellSpacing={10}>
        <tbody>
            <tr>
                <th>
<label>Name :</label>
                </th>
                <td>
<input type='text' name="name"  />
                </td>
            </tr>
            <tr>
                <th>
<label>Email :</label>
                </th>
                <td>
<input type='email' name="email" />
                </td>
            </tr>
            <tr>
                <th>
<label>mobile :</label>
                </th>
                <td>
<input type='number' name="mobile"   />
                </td>
            </tr>
            <tr>
              
                <td colSpan={2} align='right'>
<button >Update</button>


                </td>
            </tr>
        </tbody>
    </table>
   
      </form>
    </div>
    </>
)
}
      
export default Update
         
       
      
    