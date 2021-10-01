import React from "react";

function Listas({ ordenesListas }) {
  return ordenesListas.map((orden) => (
    <div className="ordenes-listas" key={orden.id}>
      {orden.info}
    </div>
  ));
}

export default Listas;
