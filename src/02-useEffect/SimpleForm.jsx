import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "thmxluis",
    email: "thmxluis@gmail.com",
  });

  const { username, email } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("First useEffect called!");
  }, []);
  useEffect(() => {
    console.log("formState Changed!");
  }, [formState]);
  useEffect(() => {
    console.log("email Changed!");
  }, [email]);

  return (
    <>
      <h1>SimpleForm</h1>
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
    </>
  );
};
