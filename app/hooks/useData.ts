import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";

interface Props {
  refresh?: boolean;
  endpoint: string;
}

const useData = <T>({ refresh = false, endpoint }: Props) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const notifyError = (message: string) => toast.error(message);

  useEffect(() => {
    const loadItems = async () => {
      const controller = new AbortController();
      setLoading(true);
      try {
        const response = await apiClient.get(endpoint, {
          signal: controller.signal,
        });
        setData(response.data);
        setLoading(false);
        console.log("api Data:", response.data);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        notifyError((err as AxiosError).message);
        setLoading(false);
      }

      return () => controller.abort();
    };
    loadItems();
  }, [refresh, endpoint]);

  return { data, setData, error, setError, isLoading, setLoading };
};

export default useData;
