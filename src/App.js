import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';
import NavBar from './components/Nav/index.jsx';
import axios from 'axios';
import { Routes,Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
 
function App() {
const navigate = useNavigate();
const [access, setAccess] = useState(false);
//BD false
const EMAIL = 'micorreo@gmail.com';
const PASSWORD = '1234asd';

useEffect(() => {
   !access && navigate('/');
}, [access]);

function login(userData) {
   if (userData.PassWord === PASSWORD && userData.Email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
//crando estado local
const [characters, setCharacters]=useState([]);
const location=useLocation();

//se guarda por referencia                                                     
async function onSearch(id){
   //llamada a la API
   try {
      const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
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
   <Route path='/Home' element={<Cards characters={characters} onClose={onClose}/>}/>
   <Route path='/About' element={<About />}/>
   <Route path='/detail/:detailId' element={<Detail />}/>
   </Routes>
   </div>
);
}


export default App;
