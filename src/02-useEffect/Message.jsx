import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Componente Montado");
    return () => {
      console.log("Componente Desmontado");
    };
  }, []);
  return (
    <>
      <h3>Usuario ya Existe!</h3>
    </>
  );
};
