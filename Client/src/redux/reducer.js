import { ADD_FAVORITE,REMOVED_FAVORITE } from "./actions"; 
const initialState={myFavorites:[]}
const rootReducer=(state=initialState,action)=>{
const {type,payload}=action;
switch (type) {
    case ADD_FAVORITE:
      return { ...state, myFavorites: payload, allCharacters: payload };
      case REMOVED_FAVORITE:
        return { ...state, myFavorites: payload };
/* sin back=end
 case ADD_FAVORITE:return{...state,
        myFavorites:[...state.myFavorites,payload]};
    case REMOVED_FAVORITE:return{...state,
        ...state.myFavorites.filter((char)=>char.id!==payload)}; */
    default: return {...state};
}
}
export default rootReducer;