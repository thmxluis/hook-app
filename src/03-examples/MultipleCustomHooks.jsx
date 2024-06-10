import { useFetch } from "../hook";

export const MultipleCustomHooks = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/25";
  const { data, isLoading, hasError } = useFetch(url);
  return (
    <>
      <h1>Imformacion de pokemon</h1>
      <hr />
      {hasError && <p>Error</p>}
      {isLoading && <p>Loading...</p>}
      <h2>{data?.name}</h2>
    </>
  );
};
