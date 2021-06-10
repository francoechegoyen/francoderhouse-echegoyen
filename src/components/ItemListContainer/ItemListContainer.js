import React from "react";
import './ItemListContainer.css';
import {ItemCount} from '../ItemCount/ItemCount';

export const Titulo = props => {
  return (
  <h1 className="titulo">{props.texto}</h1>
  )
}

export const ItemListContainer = props => {
      return (
        <div className="contenedorPrincipal">
        <ItemCount stock={10} initial={1}/>
        </div>
      );
  }