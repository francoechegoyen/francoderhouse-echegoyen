import PropTypes from 'prop-types';
import React from "react";
import './ItemListContainer.css';

class Greeting extends React.Component {
    static defaultProps = {
      name: 'Tutora'
    }

    render() {
      return (
        <h1 className="contenedorPrincipal">¡Hola {this.props.name}, esto se va a editar proximamente!</h1>
      )
    }
  }
  export default Greeting;