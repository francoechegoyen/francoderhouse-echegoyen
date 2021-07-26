import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { finishPurchaseButtonStyles } from './BotonTerminarCancelarStyles';

const useStyle = makeStyles((theme) => finishPurchaseButtonStyles(theme));
export const BotonTerminarCancelar = props =>{
    const classes = useStyle();
    const {clickCancelar} = props;
    const history = useHistory();
    return<div className={classes.contenedorGeneral}>
        <div className={classes.contenedor}>
            <Link className={classes.botones} onClick={() => history.push(`/cart`)}>Terminar compra</Link>
            <Link className={classes.botones} onClick={() => clickCancelar(false)}>Cancelar</Link>
        </div>
    </div>
}