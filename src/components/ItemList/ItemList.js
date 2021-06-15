import React, {useState, useEffect} from 'react';
import { Item } from '../Item/Item.js'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { itemListStyles } from './ItemListStyles'
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyle = makeStyles((theme) => itemListStyles(theme));

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 5,
                    title: 'Proteina Star Nutrition 1Kg',
                    description: 'Proteina de la marca Star Nutrition para maximizar tus resultados a la hora de conseguir masa muscular',
                    price: 2000,
                    picture:{
                        pictureUrl: 'https://army.com.ar/images/thumbs/0000181_natural-whey-protein-2lb_360.jpeg',
                        alt: "Proteina Star Nutrition"
                    },
                    stock: 4
                },
                {
                    id: 11,
                    title: 'Proteina Star Nutrition 1Kg',
                    description: 'Proteina de la marca Star Nutrition para maximizar tus resultados a la hora de conseguir masa muscular',
                    price: 2000,
                    picture:{
                        pictureUrl: 'https://army.com.ar/images/thumbs/0000181_natural-whey-protein-2lb_360.jpeg',
                        alt: "Proteina Star Nutrition"
                    },
                    stock: 7
                },
                {
                    id: 2,
                    title: 'Proteina Star Nutrition 1Kg',
                    description: 'Proteina de la marca Star Nutrition para maximizar tus resultados a la hora de conseguir masa muscular',
                    price: 2000,
                    picture:{
                        pictureUrl: 'https://army.com.ar/images/thumbs/0000181_natural-whey-protein-2lb_360.jpeg',
                        alt: "Proteina Star Nutrition"
                    },
                    stock: 2
                },
                {
                    id: 23,
                    title: 'Proteina Star Nutrition 1Kg',
                    description: 'Proteina de la marca Star Nutrition para maximizar tus resultados a la hora de conseguir masa muscular',
                    price: 2000,
                    picture:{
                        pictureUrl: 'https://army.com.ar/images/thumbs/0000181_natural-whey-protein-2lb_360.jpeg',
                        alt: "Proteina Star Nutrition"
                    },
                    stock: 15
                }
            ]
        ), 2000)
    })
}

export const ItemList = () => {
    const classes = useStyle();
    const [data, setData] = useState([]);

    const ejecutarElItemList = () => {
        myPromise().then(dataProductos => {
            setData(dataProductos)
        })
    }

    useEffect(() => {
        ejecutarElItemList()
    }, [])

    return<>
        {
            data.length === 0 ? (<div className={classes.root}><LinearProgress/></div>) : (<Grid container>
                <Grid item xs={12} >
                    <Grid container justify="center" >
                        {data.map((element)=><Item key={element.id}
                        id={element.id}
                        title={element.title}
                        description={element.description}
                        price={element.price}
                        pictureUrl={element.picture.pictureUrl}
                        alt={element.picture.alt}
                        stock={element.stock}
                        />)}
                    </Grid>
                </Grid>
            </Grid>)
        }
    </>
}