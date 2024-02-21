// import "./App.css";
import React, { useState } from "react";
import RoutesHOC from "./packages/routes";
import store from "./packages/store/index";
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <RoutesHOC/>
    </Provider>
  );
}

export default App;
