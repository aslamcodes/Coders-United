import { useEffect, useState, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";

export function useAxiosWithCallback() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (config: AxiosRequestConfig, callback = () => {}) => {
      const axiosConfig = {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          ...config.headers,
        },
        ...config,
      } as AxiosRequestConfig;

      try {
        setIsLoading(true);
        const response = await axios(axiosConfig);
        if (!response.status) {
          throw new Error("Problem connecting to server");
        }
        callback(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );
  useEffect(() => {
    const fetchData = async () => {};

    fetchData();
  }, []);

  return { isLoading, error, fetchData };
}
