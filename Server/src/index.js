const http = require('http');
const characters =require('./Utils/data');
const PORT = 3001;
http.createServer((req, res)=>{
res.setHeader('Access-Control-Allow-Origin','*');
const {url}=req;
if(req.url.includes('/rickandmorty/character'))
{const arrUrl=url.split('/');
const id=arrUrl[arrUrl.length-1];
const character=characters.find(character=>character.id===+id);
if(character)
{res.writeHead(200,{'content-type':'application/json'})
return res.end(JSON.stringify(character));}
res.writeHead(404,{'content-type':'text/plain'});
res.end('character not found');
    console.log('request received',req.url);}
}).listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});