import React from "react";

function Aceptadas({ ordenesAceptadas }) {
  return ordenesAceptadas.map((orden) => (
    <div className="agregadas" key={orden.id}>
      {orden.info}
    </div>
  ));
}

export default Aceptadas;
