import { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

export const FormCustomHook = () => {
  const { formState, handleInputChange, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState;

  useEffect(() => {
    // console.log("First useEffect called!");
  }, []);
  useEffect(() => {
    // console.log("formState Changed!");
  }, [formState]);
  useEffect(() => {
    // console.log("email Changed!");
  }, [email]);

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="luis@example.com"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="comtraseña"
        name="password"
        value={password}
        onChange={handleInputChange}
      />
    </>
  );
};
