import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom';
import { dataBase } from '../../Firebase/firebase.js';

export const ItemDetailContainer = props => {

    const [detalleProducto, setDetalleProducto] = useState([])
    const {productId} = useParams();

    useEffect(()=>{
        const itemCollection = dataBase.collection("coleccion1");
        const item = itemCollection.doc(productId)

        item.get().then((doc) =>{
            if (!doc.exists){
                console.log('No existe')
                return;
            }
            setDetalleProducto([{id: doc.id, ...doc.data()}])
        }).catch((error) =>{
            console.log('Error', error)
        })
    }, [])

    return<>
        {
            detalleProducto.map((detalle) => <ItemDetail detalleProducto={detalle}/> )
        }
        
    </>
}