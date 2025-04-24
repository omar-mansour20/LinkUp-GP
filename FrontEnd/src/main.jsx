import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./API/redux_toolkit/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const rootElement = document.getElementById("root");

// ReactDOM.hydrateRoot(
//   rootElement,
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
