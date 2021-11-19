import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.jsx";

const rooElement = document.getElementById("root");

function render() {
  ReactDOM.render(<App />, rooElement);
}

if (module.hot) {
  module.hot.accept("./app/App.jsx", function () {
    setTimeout(render);
  });
}

render();
