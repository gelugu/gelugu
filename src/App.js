import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from "./routs";
import Header from "./pages/Header";
import { AuthContext } from "./AuthContext";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const { login, logout, isLogin } = useAuth();

  return (
    <AuthContext.Provider value={{ login, logout, isLogin }}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
