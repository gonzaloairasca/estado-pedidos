import React from "react";

function EnProceso({ ordenesEnProceso }) {
  return ordenesEnProceso.map((orden) => (
    <div className="en-proceso" key={orden.id}>
      {orden.info}
    </div>
  ));
}

export default EnProceso;
