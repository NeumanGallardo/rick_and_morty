import { useState } from "react";
import style from './SearchBar.module.css';
export default function SearchBar({onSearch}) {
   const [id, setId]=useState('');

   function handleChange(event)
   {setId(event.target.value);}

   return (
      <div >
      <input type='search' onChange={handleChange} className={style.input} 
      placeholder="Id del Personaje"/>
      <button onClick={()=>onSearch(id)} className={style.button}>Agregar</button>
      </div>
   );
}
