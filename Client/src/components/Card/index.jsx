import { Link } from 'react-router-dom';
import style from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../redux/actions';
function Card(props) {
   const dispatch=useDispatch();
   const myFavorites=useSelector(state=>state.myFavorites);
   const [isFav,setIsFav]=useState(false);
   let char={name:props.name,id:props.id,image:props.image}
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   const handleFavorite=()=>{
      if(isFav)
      {setIsFav(false);
      dispatch(removeFav(props.id));}
      else{setIsFav(true);
      dispatch(addFav(char));}
   }
   return (
      <div className={style.container}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      <button onClick={()=>props.onClose(props.id)} className={style.tarB}>X</button>
   <Link to={`/detail/${props.id}`} ><h3 className="card-name">{props.name}</h3></Link>
         <h2>{props.status}</h2>
         <h2>{props.especie}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='foto' />
      </div>
   );
}
export default Card;