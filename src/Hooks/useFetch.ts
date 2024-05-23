import { useState, useEffect } from 'react';

export type FetchState<T> = {
  data: T | null;
  error?: Error | null | unknown;
  loading?: boolean;
};

export const useFetch = <T>(url: string): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = (await response.json()) as T;
        setState({ data, error: null, loading: false });
      } catch (error) {
        setState({ data: null, error, loading: false });
      }
    };

    fetchData();
  }, [url]);

  return state;
};
