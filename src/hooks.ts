import { useState, useEffect } from "react";

export const useQuery = <T = any>(fetchData: () => Promise<T>) => {
  const [accountData, setAccountData] = useState<T>();

  useEffect(() => {
    fetchData().then(setAccountData);
  }, []);

  return accountData;
};
