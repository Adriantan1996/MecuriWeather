import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface UseAxiosState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T = any>(url: string, options?: AxiosRequestConfig): UseAxiosState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url, options);
        setData(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cancel any ongoing requests
    };
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;