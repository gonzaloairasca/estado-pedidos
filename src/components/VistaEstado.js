import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

import { db } from "../firebase.js";

function VistaEstado() {
  const [ordenes, setOrdenes] = useState([]);

  const [ordenesEnProceso, setordenesEnProceso] = useState([]);

  const traerDatos = async () => {
    const collectionRef = collection(db, "ordenes");

    const q = query(collectionRef, orderBy("timestamps"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setOrdenes(docs);
    });
  };

  const traerOrdenesEnProceso = async () => {
    const collectionRef = collection(db, "ordenes-en-proceso");

    const q = query(collectionRef, orderBy("timestamps"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setordenesEnProceso(docs);
    });
  };

  useEffect(() => {
    traerDatos();
    traerOrdenesEnProceso();
  }, []);
  return ordenes.map((orden) => <div key={orden.id}>{orden.info}</div>);
}

export default VistaEstado;
