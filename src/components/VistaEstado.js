import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";

import { db } from "../firebase.js";
import Aceptadas from "./Aceptadas.js";
import EnProceso from "./EnProceso.js";
import Listas from "./Listas.js";

function VistaEstado() {
  const [ordenes, setOrdenes] = useState([]);

  const [ordenesEnProceso, setordenesEnProceso] = useState([]);

  const [ordenesListas, setordenesListas] = useState([]);

  const traerDatos = async () => {
    const collectionRef = collection(db, "ordenes");

    const q = query(collectionRef, orderBy("timestamps"), limit(15));

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

    const q = query(collectionRef, orderBy("timestamps"), limit(15));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setordenesEnProceso(docs);
    });
  };

  const traerOrdenesListas = async () => {
    const collectionRef = collection(db, "ordenes-listas");

    const q = query(collectionRef, orderBy("timestamps"), limit(15));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setordenesListas(docs);
    });
  };

  useEffect(() => {
    traerDatos();
    traerOrdenesEnProceso();
    traerOrdenesListas();
  }, []);
  return (
    <div>
      <Aceptadas ordenesAceptadas={ordenes} />
      <EnProceso ordenesEnProceso={ordenesEnProceso} />
      <Listas ordenesListas={ordenesListas} />
    </div>
  );
}

export default VistaEstado;
