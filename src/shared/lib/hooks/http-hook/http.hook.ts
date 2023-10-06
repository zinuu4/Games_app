import { useState, useCallback } from 'react';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface HttpError {
  status: number;
  message: string;
}

interface HttpHeaders {
  [header: string]: string;
}

export const useHttp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<HttpError | null>(null);

  const request = useCallback(
    async (
      url: string,
      method: HttpMethod = 'GET',
      body = null,
      headers: HttpHeaders = { 'Content-Type': 'application/json' },
    ) => {
      setLoading(true);

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        setLoading(false);

        return data;
      } catch (error) {
        setLoading(false);

        if (error instanceof Error) {
          setError({ status: 500, message: error.message });
        } else {
          setError({ status: 500, message: 'An error occurred' });
        }

        throw error;
      }
    },
    [],
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { loading, request, error, clearError };
};
