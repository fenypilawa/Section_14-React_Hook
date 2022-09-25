import React from "react";
import "./App.css";
import Header from "./component/Header";
import Todo from "./component/Todo";

function App() {
  return (
    <div className="container">
      <div className="container-flex">
        <Header/>
        <Todo/>
      </div>
      </div>
  );
}

export default App;
