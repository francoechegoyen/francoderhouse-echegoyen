import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { navBarStyles } from './NavBarStyles'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { CartWidget } from './CartWidget';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const useStyle = makeStyles((theme) => navBarStyles(theme));

export const NavBar = props => {
    const {itemsCart} = useContext(CartContext)
    const proteinas = "proteinas"
    const quemadores = "quemadores"
    const ganadoresdepeso = "ganadoresdepeso"
    const aminoacidos = "aminoacidos"

    const classes = useStyle()
    return <>
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Typography variant='h5' className={classes.title}>
                    <Link className={classes.titleLink} to={'/'}>NUTRIMAX</Link>
                </Typography>
                <ul className={classes.list}>
                    <li>
                        <Link className={classes.botones} to={`/category/${proteinas}`}>Proteínas</Link>
                    </li>
                    <li>
                        <Link className={classes.botones} to={`/category/${quemadores}`}>Quemadores</Link>
                    </li>
                    <li>
                        <Link className={classes.botones} to={`/category/${ganadoresdepeso}`}>Ganadores de peso</Link>
                    </li>
                    <li>
                        <Link className={classes.botones} to={`/category/${aminoacidos}`}>Aminoácidos</Link>
                    </li>
                </ul>
                {itemsCart.length > 0 ? <CartWidget/> : ''}
            </Toolbar>
        </AppBar>
    </>
}