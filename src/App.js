import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./pages/routs";
import Header from "./pages/Header";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes />
        </Router>
      </>
    );
  }
}

export default App;
