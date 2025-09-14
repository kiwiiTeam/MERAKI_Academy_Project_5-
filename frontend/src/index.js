import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import the provider
import {Provider} from "react-redux"
// import the store

import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
// wrap the App with the provider  
<Provider store={store}>


      <App />
</Provider>

);
