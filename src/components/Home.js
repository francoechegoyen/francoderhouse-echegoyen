import React from "react";
import "./Home.css";
import { BiCart } from "react-icons/bi";
function Home(props) {
  //console.warn("home", props.data);
  console.warn("props", props);
  return (
    <div>
      <div>
        <span className="data">{props.data.length}</span>
        <BiCart className="add-to-card"
        />
      </div>
      <h1>Productos a la venta</h1>
      <div className="img-wrapper item">
        <img src="https://http2.mlstatic.com/D_NQ_NP_973163-MLA44645655193_012021-O.webp" />
      </div>
      <div className="text-wrapper item">
        <span>Star Nutrition Whey Protein</span>
        <br />
        <span>Precio de lista: $2000</span>
      </div>
      <div className="cajaBotones">
        <button
          className="boton1"
          onClick={() =>
            props.addToCartHandler({ price: 1000, name: "Star Nutrition Whey Protein" })
          }
        >
          Agregar la carrito
        </button>
        </div>
        <div className="cajaBotones">
        <button
          className="boton2"
          onClick={() => {
            props.removeToCartHandler();
          }}
        >
          Eliminar del carrito
        </button>
      </div>
    </div>
  );
}
export default Home;
