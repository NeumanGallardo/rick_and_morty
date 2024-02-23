const users = require('../utils/users');
const login = async()=>{
const {email, password}=req.query;
const user =  users.find(user=>user.email===email&&user.password===password);
if(user)
{return res.json({access: true});}
else{res.status(401).json({access: false});}
}
modules.exports = login;