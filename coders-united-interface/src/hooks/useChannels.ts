import { useEffect, useState } from "react";
import { useAuthContext } from "../Context/Authentication/AuthContext";
import { useAxiosWithCallback } from "./useAxiosWithCallback";

export default function useChannels() {
  const { isLoading, fetchData: fetch, error } = useAxiosWithCallback();
  const [channels, setChannels] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const applyChannels = (channels) => {
      setChannels(channels);
    };
    const fetchChannels = async () => {
      await fetch(
        {
          url: "/channels",
          headers: {
            Authorization: "Bearer " + user.token,
          },
        },
        applyChannels
      );
    };
    fetchChannels();
  }, [user, fetch]);

  return { isLoading, error, channels };
}
