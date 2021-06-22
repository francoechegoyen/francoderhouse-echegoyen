import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { ItemCount } from '../ItemCount/ItemCount';
import { itemDetailStyles } from './ItemDetailStyles';

const useStyle = makeStyles((theme) => itemDetailStyles(theme));

export const ItemDetail = props => {

    const classes = useStyle();
    const { productDetail } = props;

    return<>
        <Grid container
            xs={12}
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
            className={classes.gridContainer}>
            <Grid item xs={10} lg={4}>
                <Card>
                    <CardMedia
                        component='img'
                        image= {productDetail.picture.pictureUrl}
                        title= {productDetail.picture.alt}
                    />
                </Card>
            </Grid>
            <Grid item xs={10} lg={4}>
                <Typography variant="h4" className={classes.titulo}>{productDetail.title}</Typography>
                {(productDetail.freeShipping) ? <Chip className={classes.envio} label='Envío gratis' icon={<LocalShippingIcon />}></Chip> : 'Consultar costo del envío' }
                <Typography className={classes.precio}>Precio: ${productDetail.price}</Typography>
                <Typography className={classes.descripcion}>{productDetail.description}</Typography>
                <Typography variant="h6" className={classes.detalle}>Detalles:</Typography>
                <Typography variant="h6" className={classes.detalle}> Tamaño: {productDetail.dimensions.tamano}</Typography>
                <Typography variant="h6" className={classes.detalle}> Sabor: {productDetail.dimensions.sabor}</Typography>
                <Typography variant="h6" className={classes.detalle}> Stock disponible: {productDetail.stock}</Typography>
                <ItemCount stock={productDetail.stock} valorInicial={1}/>
            </Grid>
        </Grid>
    </>
}