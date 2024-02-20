import SearchBar from "../SearchBar/index";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
export default function NavBar({onSearch}){
    return <><header className={style.container}>
<nav>
<Link className={style.link}to='/about' ><h2>About</h2></Link>
<Link className={style.link} to='/home'><h2>Home</h2></Link>
<Link className={style.link} to='/favorites'><h2>Favorites</h2></Link>
<SearchBar onSearch={onSearch}/>
</nav>
    </header>
    </>
}