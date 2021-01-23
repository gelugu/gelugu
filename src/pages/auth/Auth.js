import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./auth.css";
import { useAuth } from "../../hooks/useAuth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  const {login} = useAuth();

  const history = useHistory();

  const handlerSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsSubmiting(true);
      await login(email, password);
      history.push("/");
    } catch (error) {
      setIsSubmiting(false);
    }
  };

  return (
    <div className="container">
      <form>
        <fieldset className="authField">
          <input
            type="email"
            className="input"
            placeholder="email"
            autoFocus={true}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="input"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="buttonSubmit"
            type="Submit"
            onClick={handlerSubmit}
            disabled={isSubmiting}
          >
            {isSubmiting ? "Wait please..." : "LogIn"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};
