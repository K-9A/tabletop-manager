import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export const useDashboardData = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      const userId = (session.user as any).id;

      async function fetchData() {
        setIsLoading(true); // Start loading
        try {
          const response = await axios.get(`/api/user/?userId=${userId}`);
          if (response.status === 200) {
            setUserData(response.data);
          }
          setIsLoading(false); // Stop loading
        } catch (err) {
          if (axios.isAxiosError(err) && err.response) {
            setError(err.response.data.error || "An error occurred");
          } else {
            setError("An error occurred");
          }
          setIsLoading(false); // Stop loading
        }
      }

      fetchData();
    }
  }, [session]);

  return { userData, error, isLoading };
};
