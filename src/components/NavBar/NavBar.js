import React, { useContext } from 'react'; // siempre tiene que estar
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavBarStyles } from './NavBarStyles';
import { CartWidget } from './CartWidget';
import logo from './img/main_logo.png';


const useStyles = makeStyles((theme) => NavBarStyles(theme));

const LogoNavbar = () => {
    return <Link aria-current="page" to={'/'}>
        <img src={logo} alt="Logo de la cerveceria"></img>
    </Link>
}

export const NavBar = () => {
    const classes = useStyles();
    const proteinas = "proteinas"
    const quemadores = "quemadores"
    const ganadoresdepeso = "ganadoresdepeso"
    const aminoacidos = "aminoacidos"
    const {itemsCart} = useContext(CartContext)

    return <header className={classes.container}>
        <nav className={classes.innerWrap}>
            <div className={classes.logoCabeceraDesktop}>
                <LogoNavbar />
            </div>

            <div className={classes.listaContainerMobile}>
                <button className={classes.mobileMenu}>
                    <MenuIcon fontSize="large" />
                </button>
            </div>

            <div className={classes.logoCabeceraMobile}>
                <LogoNavbar />
            </div>

            <div className={classes.listaContainerDesktop}>
                <ul className={classes.listaCabeceraDesktop}>
                <li><Link className={classes.botones} to={`/category/${proteinas}`}>Proteínas</Link></li>
                <li><Link className={classes.botones} to={`/category/${quemadores}`}>Quemadores</Link></li>
                <li><Link className={classes.botones} to={`/category/${ganadoresdepeso}`}>Ganadores de peso</Link></li>
                <li><Link className={classes.botones} to={`/category/${aminoacidos}`}>Aminoácidos</Link></li>
                </ul>
            </div>
            {itemsCart.length > 0 ? <CartWidget/> : ''}
        </nav>
    </header>
}