import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMauseMove = ({ x, y }) => {
      const coors = { x, y };
      console.log(coors);
    };
    window.addEventListener("mousemove", onMauseMove);
    return () => {
      window.removeEventListener("mousemove", onMauseMove);
    };
  }, []);
  return (
    <>
      <h3>Usuario ya Existe!</h3>
    </>
  );
};
