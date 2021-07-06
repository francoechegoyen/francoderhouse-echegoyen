import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { cartMessageStyles } from './CartMessageStyles'

const useStyle = makeStyles((theme) => cartMessageStyles(theme));

export const CartMessage = () =>{

    const classes = useStyle();

    return<div className={classes.container}>
        <Typography className={classes.text} variant="h4">No hay artículos actualmente en el carrito.</Typography>
        <div className={classes.buttonContainer}>
            <Link className={classes.buttons} to={`/`}>Volver a la tienda</Link>
        </div>
    </div>
}