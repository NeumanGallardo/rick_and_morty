import React,{useState, useEffect}from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import style from './Detail.module.css';

export default function Detail()
{let { detailId } = useParams(); // { detailId: value }
const [character, setCharacter] = useState({})
useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(
       ({ data }) => {
          if (data.name) {
             setCharacter(data);
             console.log(data);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       }
    );
    return setCharacter({});
 }, [detailId]);
return <div>
            <div className={style.container}>
              <h2>{character.name}</h2>
              <h2>{character.gender}</h2>
              <h2>{character.status}</h2>
              <h2>{character.origin?.name}</h2>
              <h2>{character.location?.name}</h2>
              <img src={character.image} alt='not found'/>
            </div>
        <Link to='/home' ><button>To Home</button></Link>
</div>}