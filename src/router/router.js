import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../screens/ItemListContainer/ItemListContainer'
import { NavBar } from '../components/NavBar/NavBar';
import { Cart } from '../screens/Cart/Cart';
import { Error } from '../screens/error/error';

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
            <Route exact path="/cart">
                <Cart/>
            </Route>
            <Route path="/*">
                <Error/>
            </Route>
        </Switch>
    </BrowserRouter>
}