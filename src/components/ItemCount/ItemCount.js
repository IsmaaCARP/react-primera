import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, SetCantidad] = useState(initial);

  const incremet = () => {
    if (cantidad < stock) {
      SetCantidad(cantidad + 1);
    }
  };

  const decrement = () => {
    if (cantidad > 1) {
      SetCantidad(cantidad - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="btn btn-outline-success" onClick={decrement}>
          {" "}
          -{" "}
        </button>
        <h4 className="Number">{cantidad}</h4>
        <button className="btn btn-outline-success" onClick={incremet}>
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => onAdd(cantidad)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export { ItemCount };
