import { Link } from 'react-router-dom';
import style from './Card.module.css';
function Card(props,) {
   return (
      <div className={style.container}>
      <button onClick={()=>props.onClose(props.id)} className={style.tarB}>X</button>
   <Link to={`/detail/${props.id}`} ><h3 className="card-name">{props.name}</h3></Link>
         <h2>{props.status}</h2>
         <h2>{props.especie}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <img src={props.image} alt='foto' />
      </div>
   );
}
export default Card;