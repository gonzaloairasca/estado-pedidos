import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Formulario from "./components/Formulario";
import VistaEstado from "./components/VistaEstado";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/formulario">
          <Formulario />
        </Route>
        <Route path="/vista-estado">
          <VistaEstado />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
