import { useCounter, useFetch } from "../hook";
import { LoadingMessage } from "./LoadingMessage";

export const MultipleCustomHooks = () => {
  const { counter, decrement, increment } = useCounter(25);
  console.log(counter);
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  return (
    <>
      <h1>Imformacion de pokemon</h1>
      <hr />
      {hasError && <p>Error</p>}
      {isLoading && <LoadingMessage />}
      <h2>{data?.name}</h2>

      <img src={data?.sprites.front_default} alt={data?.name} />

      <button onClick={() => (counter > 1 ? decrement() : null)} className="btn btn-primary mt-2">
        Anterior
      </button>
      <button onClick={() => increment()} className="btn btn-primary mt-2">
        Siguiente
      </button>
    </>
  );
};
