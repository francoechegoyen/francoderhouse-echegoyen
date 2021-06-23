import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { myPromise } from '../../services/promise/promise.js';

export const ItemDetailContainer = props => {

    const [productDetail, setProductDetail] = useState([])
    const {productId} = useParams();

    useEffect( () => {
        myPromise()
        .then(response => {
            console.log(response)
            setProductDetail(response.filter(element => element.id === parseInt(productId)))
        }
        )
    }, [productId]);

    return<>
        {
            productDetail.map((detalle) => <ItemDetail productDetail={detalle}/> )
        }

    </>
}