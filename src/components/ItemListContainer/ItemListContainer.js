import React from "react";
import './ItemListContainer.css';

export const ItemListContainer = props => {
      return (
        <h1 className="saludo">{props.texto}</h1>
      );
  }