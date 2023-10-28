import { useEffect, useState, useCallback } from "react";

export const useFetch = (url: string, effect) => {
  const [state, setState] = useState<any>({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = useCallback(async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });
      const resp = await fetch(url);
      const data = await resp.json();
      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (err) {
      setState({
        data: null,
        isLoading: false,
        hasError: err,
      });
    }
  }, [url, state]);

  useEffect(() => {
    // Al actualizar URL => disparamos getFech()
    getFetch();
  }, [url, effect, getFetch]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
