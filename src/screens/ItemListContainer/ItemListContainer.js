import React, { useEffect, useState } from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { myPromise } from '../../services/promise/promise.js';
import { useParams } from 'react-router-dom';

export const ItemListContainer = props => {

    const [productos, setProducts] = useState([])
    const {categoryId} = useParams();

    useEffect(() => {
        myPromise()
        .then(response => categoryId === undefined ?
            setProducts(response)
            :
            setProducts(response.filter(element => element.category === categoryId)
        ))
    }, [categoryId])

    return<>
        <ItemList productos={productos}/>
    </>
}