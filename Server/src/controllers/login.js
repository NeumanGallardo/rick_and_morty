const {User} = require('../DB_connection');
const login = async(req, res)=>{
try{
const {email, password}=req.query;
if(!email || !password)  return res.status(400).send('Faltan datos');
const user = await User.findOne({where: {email: email}});
if(!user){res.status(404).send('Usuario no encontrado');}
else
{console.log(user.password, password);
    return user.password === password
    ?res.json({access: true})
    : res.status(500).send('password incorrecta');}
}catch(error){return res.status(500).json(error.message)}
};
module.exports = login;