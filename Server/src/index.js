const express = require('express');
const router = require('./routes/index');
const {conn} = require('./DB_connection');
const server = express();
const PORT = 3001; 

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(express.json());
server.use('/rickandmorty',router);


conn.sync({force: true}).then(()=>{
   console.log('Base de Datos OK');
   server.listen(PORT, () => {
    console.log('Servidor OK en Port: ' + PORT);
 });
})

/* 
//servidor con http
const http = require('http');
//const characters =require('./Utils/data');
const getCharById = require('./controllers/getCharById');

const PORT = 3001;
http.createServer((req, res)=>{
res.setHeader('Access-Control-Allow-Origin','*');
const {url}=req;
if(req.url.includes('/rickandmorty/character'))
{const arrUrl=url.split('/');
const id=arrUrl[arrUrl.length-1];
//const character=characters.find(character=>character.id===+id);
return getCharById(res, +id);
}
//if(character)
//{res.writeHead(200,{'content-type':'application/json'})
//return res.end(JSON.stringify(character));}
//res.writeHead(404,{'content-type':'text/plain'});
res.end('character not found, personaje no encontrado');
 //console.log('request received',req.url);}
}).listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
}); */