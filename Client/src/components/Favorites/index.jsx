import {useSelector } from "react-redux";
import Card from '../Card/index';
const Favorites=()=>{
const Favorite=useSelector(state=>state.myFavorites);
return(<div>
    {Favorite?.map(fav=>(<Card
      id={fav.id}
      name={fav.name}
      status={fav.status}
      species={fav.species}
      gender={fav.gender}
      origin={fav.origin}
      image={fav.image}
    />))}
</div>)
}
export default Favorites;