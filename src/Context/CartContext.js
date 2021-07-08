import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartComponentContext = props => {

    const [itemsCart, setItemsCart] = useState([])
    const [subTotal, setSubTotal] = useState(0);
    const [itemsQuantity, setItemsQuantity] = useState(0);


    const calculatePrice = (price, qty) => {
        return price * qty;
    }

    const addItem = order => {
        setSubTotal(subTotal + calculatePrice(order.item.price, order.quantity));
        setItemsQuantity(itemsQuantity + order.quantity)
        if (itemsCart.find(item => item.item.id === order.item.id)) {
            const updateItem = itemsCart.map((item) => {
                const totalQty = item.quantity + order.quantity;
                if (item.item.id === order.item.id) {
                    return { ...item, quantity: totalQty }
                }
                return item
            })
            setItemsCart(updateItem)
        } else {
            setItemsCart(orders => [...orders, order])
        }
    }


    const removeItem = id => {
        const itemToRemove = itemsCart.find(item => item.item.id === id);
        setSubTotal(subTotal - calculatePrice(itemToRemove.item.price, itemToRemove.quantity));
        setItemsQuantity(itemsQuantity - itemToRemove.quantity)
        setItemsCart(itemsCart.filter((item) => item.item.id !== id));
    }

    const clear = () => {
        setItemsCart([]);
        setSubTotal(0);
        setItemsQuantity(0);
    }

    return <CartContext.Provider value={{ addItem, removeItem, subTotal, clear, itemsCart, itemsQuantity }}>
        {props.children}
    </CartContext.Provider>

}