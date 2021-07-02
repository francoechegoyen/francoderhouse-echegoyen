import React, { useContext } from 'react';
import { Badge, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from '../../Context/CartContext';
import { useHistory } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      backgroundColor: '#ffffff',
      color: '#5c4000'
    },
  }))(Badge);

export const CartWidget = props => {
    const history = useHistory();
    const {itemsQuantity} = useContext(CartContext)
    return <>
        <IconButton onClick={() => history.push("/cart")}>
            <StyledBadge badgeContent={itemsQuantity}>
                <ShoppingCartIcon/>
            </StyledBadge>
        </IconButton>
    </>
}