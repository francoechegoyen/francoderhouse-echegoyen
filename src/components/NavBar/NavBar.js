import React, { useState, useContext } from 'react'; // siempre tiene que estar
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { makeStyles, AppBar, Toolbar, Menu, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavBarStyles } from './NavBarStyles';
import { CartWidget } from './CartWidget';
import logo from './img/main_logo.png';

const useStyles = makeStyles((theme) => NavBarStyles(theme));
    const proteinas = "proteinas"
    const quemadores = "quemadores"
    const ganadoresdepeso = "ganadoresdepeso"
    const aminoacidos = "aminoacidos"

    const ListContainerForMobile = () => {
        const classes = useStyles();
        const [anchorEl, setAnchorEl] = useState(null);
        const mobileMenuOpen = Boolean(anchorEl);
        const menuId = 'navigation-for-mobile';

        const handleMobileMenuClose = () => {
            setAnchorEl(null)
        }

        const handleMobileMenuOpen = (event) => {
            setAnchorEl(event.currentTarget)
        }

        const menuMobile = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={mobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                <div className={classes.listaContainerMobile}>
                    <ListContainerNavbar />
                </div>
            </Menu>
        )

        return <div className={classes.listaContainerMobile}>
            <IconButton
                aria-label="show more"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
            >
                <MenuIcon fontSize="large" />
            </IconButton>
            {menuMobile}
        </div>
    }

    const ListContainerNavbar = () => {
        const classes = useStyles();
        return <ul className={classes.navbarList}>
<li><Link className={classes.botones} to={`/category/${proteinas}`}>Proteínas</Link></li>
<li><Link className={classes.botones} to={`/category/${quemadores}`}>Quemadores</Link></li>
<li><Link className={classes.botones} to={`/category/${ganadoresdepeso}`}>Ganadores de peso</Link></li>
<li><Link className={classes.botones} to={`/category/${aminoacidos}`}>Aminoácidos</Link></li>
        </ul>
    }

    const LogoNavbar = () => {
        return <Link aria-current="page" to={'/'}>
            <img src={logo}></img>
        </Link>
    }

    export const NavBar = () => {
        const classes = useStyles();
        const {itemsCart} = useContext(CartContext)

        return <div>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.innerWrap}>
                    <div className={classes.logoContainerDesktop}>
                        <LogoNavbar />
                    </div>
                    <div className={classes.listaContainerMobile}>
                        <ListContainerForMobile />
                    </div>
                    <div className={classes.logoContainerMobile}>
                        <LogoNavbar />
                    </div>
                    <div className={classes.listaContainerDesktop}>
                        <ListContainerNavbar />
                    </div>
                    {itemsCart.length === 0 ? <div></div> : <CartWidget />}
                </Toolbar>
            </AppBar>

        </div>

    }