import logo from './Logo.svg';
import Nav from './Nav.js';

function Header(){
    return  (
    <header>
        <img src = {logo} ></img>
        <Nav></Nav>
    </header>
);
}

export default Header;