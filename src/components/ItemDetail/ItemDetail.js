import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { ItemCount } from '../ItemCount/ItemCount';
import { itemDetailStyles } from './ItemDetailStyles';
import { FinishPurchaseButton } from '../../components/FinishPurchaseButton/FinishPurchaseButton.js';
import { CartContext } from '../../Context/CartContext';

const useStyle = makeStyles((theme) => itemDetailStyles(theme));

export const ItemDetail = props => {

    const classes = useStyle();
    const { detalleProducto } = props;
    const [cantidadProducto, setCantidadProducto] = useState(0)
    const [click, setClick] = useState(false)
    const {addItem, removeItem} = useContext(CartContext)

    const onAdd = cantidad => {
        setCantidadProducto(cantidad); 
        setClick(true);
        addItem({item: detalleProducto, quantity: cantidad}) 
    }

    const clickCancelar = cl =>{
        setClick(false);
        removeItem(detalleProducto.id);
    }

    return<>
        <Grid container 
            xs={12}
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            className={classes.gridContainer}>
            <Grid item xs={12} lg={3}>
                <Card>
                    <CardMedia
                        component='img'
                        image= {detalleProducto.pictureUrl}
                    />
                </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
            <Typography variant="h4" className={classes.titulo}>{detalleProducto.title}</Typography>
                {(detalleProducto.freeShipping) ? <Chip className={classes.envio} label='Envío gratis' icon={<LocalShippingIcon />}></Chip> : 'Consultar costo del envío' }
                <Typography className={classes.precio}>${detalleProducto.price}</Typography>
                <Typography className={classes.descripcion}>{detalleProducto.description}</Typography>
                <Typography variant="h6" className={classes.detalle}> Tamaño: {detalleProducto.tamano}</Typography>
                <Typography variant="h6" className={classes.detalle}> Sabor: {detalleProducto.sabor}</Typography>
                <Typography variant="h6" className={classes.detalle}> Stock disponible: {detalleProducto.stock}</Typography>
                {
                    click ? 
                    <FinishPurchaseButton clickCancelar={clickCancelar}/>
                    :
                    <ItemCount stock={detalleProducto.stock} valorInicial={1}  cantidadProducto={cantidadProducto} onAdd={onAdd}/>
                }

            </Grid>
        </Grid>
    </>
}