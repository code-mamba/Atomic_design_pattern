import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormOrganism from "./components/organisms/Form/FormOrganism";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormOrganism></FormOrganism>
      </header>
    </div>
  );
}

export default App;
