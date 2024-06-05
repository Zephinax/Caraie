import { useState, useEffect } from 'react';

export const useFetchJson = <T>(
  jsonPath: string
): { data: T | null; loading: boolean; error: Error | null } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };
    if (jsonPath) {
      const prefix = new URL(`/public/db/${jsonPath}`, import.meta.url).href;
      fetchData(prefix);
    }
  }, [jsonPath]);

  return { data, loading, error };
};
