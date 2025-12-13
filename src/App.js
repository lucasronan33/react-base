import React from "react";
import history from "./services/history";
import { Router } from "react-router-dom";

import Header from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history} >
        <Header />
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>

  );
}

export default App;
