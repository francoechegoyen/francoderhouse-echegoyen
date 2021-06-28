import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { finalizarCompraStyles } from './FinalizaCompraStyles';

const useStyle = makeStyles((theme) => finalizarCompraStyles(theme));
export const FinishPurchaseButton = props =>{
    const classes = useStyle();
    const {clickCancelar} = props;
    const history = useHistory();
    return<div className={classes.generalContainer}>
        <div className={classes.container}>
            <Link className={classes.buttonAccept} onClick={() => history.push(`/cart`)}>Terminar compra</Link>
            <Link className={classes.buttonCancel} onClick={() => clickCancelar(false)}>Cancelar</Link>
        </div>
    </div>
}