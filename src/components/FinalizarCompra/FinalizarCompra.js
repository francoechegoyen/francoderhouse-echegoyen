import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { finalizarCompraStyles } from './FinalizaCompraStyles';

const useStyle = makeStyles((theme) => finalizarCompraStyles(theme));
export const FinishPurchaseButton = props =>{
    const classes = useStyle();

    return<div className={classes.generalContainer}>
        <div className={classes.container}>
            <Link className={classes.buttonAccept} to={`/cart`}>Acceder al carrito</Link>
        </div>
    </div>
}