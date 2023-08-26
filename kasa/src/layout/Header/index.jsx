import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
function Header() {
    return (
        <nav className='header'>
            <NavLink to="/home"><img src={logo} alt="Kasa Logo" className='header__logo' /></NavLink>
            <ul>
                <li className='header__nav'><NavLink className={({ isActive}) => (isActive ? "header__nav__link header__nav__link__active" : "header__nav__link header__nav__link__inactive")} to="/">Accueil</NavLink></li>
                <li className='header__nav'><NavLink className={({ isActive}) => (isActive ? "header__nav__link header__nav__link__active" : "header__nav__link header__nav__link__inactive")} to="/apropos">À propos</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header