import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { itemStyles } from './ItemStyles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ItemCount } from '../ItemCount/ItemCount'

const useStyle = makeStyles((theme) => itemStyles(theme));

export const Item = props => {
    const classes = useStyle();
    const { producto } = props;

    return<>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    image= {producto.picture.pictureUrl}
                    width="200"
                    title= {producto.picture.alt}
                />
                <CardContent>
                    <Typography  component="h2" className={classes.titulo}>{producto.title}</Typography>
                    <Typography  color="textSecondary" component="p">{producto.description}</Typography>
                    <Typography  className={classes.valor}>${producto.price}</Typography>
                    <Typography  variant="h6" component="p">Stock: {producto.stock}</Typography>
                    <Typography  variant="p" component="p">ID: {producto.id}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardAction}>
                <ItemCount stock={producto.stock} valorInicial={1}/>
            </CardActions>
        </Card>
    </>
}