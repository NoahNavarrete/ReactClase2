import React from "react";
import Boton from './Boton';

const Tarjeta = () => {
    return (
      <figure style={{
          border: "solid 2px black",
          width: "200px",
          height: "275px",
          textAlign: "center"
      }}>
          <figcaption>
              <h1>Villa Langostura</h1>
              <p>Un hermoso lugar para
                  pasar las vacaciones
              </p>
          </figcaption>
          <Boton/>
      </figure>
    )
  };
  export default Tarjeta;
  