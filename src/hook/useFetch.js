import React, { useEffect, useState } from "react";

export const useFetch = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/1";
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch(url);
  }, []);

  const getFetch = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // try {
    //   setState({
    //     data,
    //     isLoading: false,
    //     hasError: false,
    //     error: null,
    //   });
    // } catch (error) {
    //   setState({
    //     data: null,
    //     isLoading: false,
    //     hasError: true,
    //     error,
    //   });
    // }
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
