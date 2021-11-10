import React, { useState } from "react";
import { loginUser } from "../Context/Authentication/action";
import { useAuthDispatch } from "../Context/Authentication/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAuthDispatch();

  const onSubmitHandler = (e) => {
    console.log(email, password);
    e.preventDefault();
    loginUser(dispatch, { email, password });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Email</label>
      <input
        value={email}
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        value={password}
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Login</button>
    </form>
  );
};
