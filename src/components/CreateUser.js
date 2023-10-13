import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function CreateUser(){
    const navigate=useNavigate();
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[mobile,setMobile]=useState('')
   
    const handleSubmit=(e)=>{
     
            e.preventDefault();
           
            const url='http://localhost/php/task/functionget.php';
            let fData=new FormData();
            fData.append('name',name);
        fData.append('email',email);
        fData.append('mobile',mobile);
console.log(name);
console.log(email);

console.log(mobile);


    axios.post(url,fData).then(response=>alert(response.data).catch(error=>alert(error)));
    console.log(Response);
    navigate('/')
    

    }
      
         
       
      
    
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
<input type='text' name="name"  onChange={(e)=>setName(e.target.value)}value={name}/>
                    </td>
                </tr>
                <tr>
                    <th>
<label>Email :</label>
                    </th>
                    <td>
<input type='email' name="email"   onChange={(e)=>setEmail(e.target.value)}value={email}/>
                    </td>
                </tr>
                <tr>
                    <th>
<label>mobile :</label>
                    </th>
                    <td>
<input type='number' name="mobile"   onChange={(e)=>setMobile(e.target.value)}value={mobile}/>
                    </td>
                </tr>
                <tr>
                  
                    <td colSpan={2} align='right'>
<button onClick={handleSubmit}>Save</button>


                    </td>
                </tr>
            </tbody>
        </table>
       
          </form>
        </div>
        </>
    )
}