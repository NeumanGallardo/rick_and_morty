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

const handleSubmit=(event)=>{event.preventDefault();login(userData);};

return <form onSubmit={handleSubmit}>
    <label>Email</label> 
    <input type='text'name='email'value={userData.email}
    onChange={handleChange}></input>{errors.email!==''&&<p>{errors.email}</p>}
    <label>PassWord</label> 
    <input type='password'name='password'value={userData.password} 
    onChange={handleChange}></input>{errors.password!==''&&<p>{errors.password}</p>}
    <button type="submit">Login</button>
</form>

}