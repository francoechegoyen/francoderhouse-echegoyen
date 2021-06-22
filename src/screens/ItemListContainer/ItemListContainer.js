import React, { useEffect, useState } from 'react';
import { ItemList } from '../../components/ItemList/ItemList';

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

export const ItemListContainer = props => {

    const [productos, setProducts] = useState([])

    useEffect( () => {
        myPromise()
        .then(response => setProducts(response))
        .catch(error => console.log(error))
    }, []);

    return<>
        <ItemList productos={productos}/>
    </>
}