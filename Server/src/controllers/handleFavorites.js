let myFavorites = [];
const postFav = (req, res)=>{
const {character} = req.body;
myFavorites.push(character);
resizeBy.json(myFavorites);
};
const deleteFav = (req, res)=>{

};