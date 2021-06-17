import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail.js'

const myPromiseProductDetail = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 5,
                    title: 'Proteina Star Nutrition de 1 kilo sabor vainilla',
                    description: '100% Premium Whey Protein es un ultra concentrado de proteínas de suero lácteo de máxima pureza. Star Nutrition Premium Whey Protein es la proteína más pura en el mercado. Cuenta con una fórmula muy baja en saborizantes y edulcorantes (menos del 1,2%) lo que permite obtener la maxima pureza.',
                    price: 2000,
                    picture:{
                        pictureUrl: 'http://cdn.shopify.com/s/files/1/2513/6832/products/SN0060PremiumWheyProtein1VainillaNEW_800x.jpeg?v=1571233182',
                        alt: "Proteina Star Nutrition de 1 KG"
                    },
                    stock: 4,
                    dimensions:{
                        tamano: '1 Kilo',
                        sabor: 'Vainilla'
                    },
                    freeShipping: true,
                }
            ]
        ), 2000)
    })
}

export const ItemDetailContainer = props => {

    const [productDetail, setProductDetail] = useState([])

    useEffect( () => {
        myPromiseProductDetail()
        .then(response => setProductDetail(response))
        .catch(error => console.log(error))
    }, []);

    return<>
        {
            productDetail.map((detalle) => <ItemDetail productDetail={detalle}/> )
        }

    </>
}