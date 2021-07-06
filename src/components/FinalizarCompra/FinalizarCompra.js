import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { finalizarCompraStyles } from './FinalizaCompraStyles';

const useStyle = makeStyles((theme) => finalizarCompraStyles(theme));
export const FinishPurchaseButton = props =>{
    const classes = useStyle();
    const {clickCancelar} = props;
    const history = useHistory();
    function terminarCompra() {
        history.push("/cart");
      }
    return<div className={classes.generalContainer}>
        <div className={classes.container}>
        <button className={classes.buttonAccept} onClick={terminarCompra}>Finalizar compra</button>
        <button className={classes.buttonCancel} onClick={() => clickCancelar(false)}>Cancelar</button>
        </div>
    </div>
}