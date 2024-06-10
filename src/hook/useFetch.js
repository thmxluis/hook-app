import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch(url);
  }, [url]);

  const setLoading = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async (url) => {
    setLoading();
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log({ data });
      setState({
        data,
        isLoading: false,
        hasError: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error,
      });
    }
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
