import '../styles/header.css';
import helltakerBackground from '../assets/Helltaker_Banner.webp';

function Header(){
    return(
        <header>
            <img src={helltakerBackground} alt='Helltaker Background'></img>
        </header>
    )
}

export default Header;