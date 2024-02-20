import {React, useState} from "react";
import validation from "../../validation/Validation";
export default function Form({login})
{const [userData,setUserData]=useState({});
const [errors,setErrors]=useState({});

function handleChange(event){
    setErrors(validation({...userData,[event.target.name] : event.target.value
        })
    );
setUserData({...userData,[event.target.name]:event.target.value});
}

return <form onSubmit={()=>{login(userData)}}>
    <label>Email</label> 
    <input type='text'name='Email'value={userData.Email}
    onChange={handleChange}></input>{errors.Email!==''&&<p>{errors.Email}</p>}
    <label>PassWord</label> 
    <input type='password'name='PassWord'value={userData.PassWord} 
    onChange={handleChange}></input>{errors.PassWord!==''&&<p>{errors.PassWord}</p>}
    <button>Login</button>
</form>

}