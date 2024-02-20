import Card from '../Card/index';
import style from './Cards.module.css'
export const Cards = ({characters,onClose})=>{return(
<div>{characters.map((item)=>{   
   return (
   <div className={style.container}key={item.id}>
      <Card
      id={item.id}
      name={item.name}
      status={item.status}
      species={item.species}
      gender={item.gender}
      origin={item.origin.name}
      image={item.image}
      onClose={onClose}
      />
   </div>
   );
   }
   )}
</div>
);
};

export default Cards;
