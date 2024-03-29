const axios = require('axios');
const URL='https://rickandmortyapi.com/api/character/';
const getCharById = async (req, res)=>{
const ID=req.params.id;
try{
const response = await   axios(`${URL}${ID}`)
const { id, name, status, species, origin, gender, image } = response.data;
const character ={id, name, status, species, origin, image, gender};
return res.json(character);
}
catch(error){
return res.status(500).json({message: error.message});
}
};
module.exports = getCharById; 
/* //version antigua
const axios = require('axios');
const URL='https://rickandmortyapi.com/api/character/';
function getCharById(res, id) {
axios(`${URL}${id}`)
.then(({data}) => {
const { id, name, status, species, origin, gender, image } = data;
console.log(data);
const character ={id, name, status, species, origin, image, gender};
res.writeHeader(200, {'Content-Type': 'application/json'});
// cadena de texto es decir string
res.end(JSON.stringify(character));
})
.catch((err) => {
res.writeHead(500, { 'Content-Type': 'text/plain' });
return res.end(err.message);});
};

module.exports = getCharById; */