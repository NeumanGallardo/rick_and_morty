import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';
import NavBar from './components/Nav/index.jsx';
import axios from 'axios';
import { Routes,Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/index.jsx';
function App() {
const navigate = useNavigate();
const [access, setAccess] = useState(false);
//BD false front-end
//const EMAIL = 'micorreo@gmail.com';
//const PASSWORD = '1234asd';

//useEffect(() => {
  // !access && navigate('/');
//}, [navigate, access]); 
// con db simulada en el back=end
function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      //setAccess(data);
      console.log(access);
      access && navigate('/home');
   })
   .catch((error)=>console.log('error', error));
}
/* con db simulaa en el front-end
function login(userData) {
   if (userData.PassWord === PASSWORD && userData.Email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
} */
//crando estado local
const [characters, setCharacters]=useState([]);
const location=useLocation();

//se guarda por referencia                                                     
async function onSearch(id){
   //llamada a la API
   try {
      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      //servidor `https://rickandmortyapi.com/api/character/${id}`
      if (response.data.name) {
         setCharacters((oldChars) => [...oldChars, response.data]);
      }
   } catch (error) {
      window.alert('Error logeado');
      console.log(error);}}

const onClose = (id) => {
   const filtered = characters.filter(char => char.id !== id );
   setCharacters(filtered);
 }        
 return (
   <div className='App'>
 {location.pathname !== '/' &&<NavBar onSearch={onSearch} />}
   <Routes>
   <Route path='/'element={<Form login={login}/>}/>
   <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
   <Route path='/about' element={<About />}/>
   <Route path='/detail/:detailId' element={<Detail />}/>
   <Route path='/favorites' element={<Favorites />}/>
   </Routes>
   </div>
);
}


export default App;
