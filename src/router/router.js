import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../screens/ItemListContainer/ItemListContainer'
import NavBar from '../components/NavBar/NavBar';

export const Router = () =>{
    return <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/">
                <ItemListContainer/>
            </Route>
            <Route exact path="/category/:categoryId">
                <ItemListContainer/>
            </Route>
            <Route exact path="/product/:productId">
                <ItemDetailContainer/>
            </Route>
        </Switch>
    </BrowserRouter>
}