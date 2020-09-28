import React, { useEffect, useRef, useState } from "react";
import { FBlogin, FBregister } from "../../firebase";

import "./auth.css";

export default () => {
  const [login, setLogin] = useState("example.mixail@gmail.com");
  const [name, setName] = useState("Mikhail");
  const [password, setPassword] = useState("veryG00dPa55word");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);

  const buttonSubmitRef = useRef(null);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setIsSubmiting(true);
    buttonSubmitRef.current.innerText = "Wait please...";

    try {
      if (isRegistration) {
        await FBregister(name, login, password);
      } else {
        await FBlogin(login, password);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isSubmiting) return;

    setTimeout(() => {
      setIsSubmiting(false);
      buttonSubmitRef.current.innerText = "LogIn";
    }, 5000);
  });

  return (
    <div className="container">
      <form>
        <fieldset className="authField">
          <input
            disabled={!isRegistration}
            type="text"
            className="inputName"
            placeholder="Name"
            autoFocus={isRegistration}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            className="inputLogin"
            placeholder="login"
            autoFocus={!isRegistration}
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <input
            type="password"
            className="inputPassword"
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
            ref={buttonSubmitRef}
          >
            Sign in
          </button>
        </fieldset>
        <span className="isRegistration">
          Not restered?
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => {
                setIsRegistration(!isRegistration);
                buttonSubmitRef.current.innerText = isRegistration
                  ? "Sign in"
                  : "Sign up";
              }}
            />
            <span className="slider round"></span>
          </label>
        </span>
      </form>
    </div>
  );
};
