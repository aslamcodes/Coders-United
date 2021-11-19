import { useEffect, useState } from "react";
import { useAuthContext } from "../Context/Authentication/AuthContext";
import useAxiosWithCallback from "./useAxiosWithCallback";

export default function useRoles() {
  const { isLoading, fetchData: fetch, error } = useAxiosWithCallback();
  const [roles, setRoles] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const applyRoles = (roles) => {
      setRoles(roles);
    };
    const fetchChannels = async () => {
      await fetch(
        {
          url: "/channels/role-menu",
          headers: {
            Authorization: "Bearer " + user.token,
          },
        },
        applyRoles
      );
    };
    fetchChannels();
  }, [user, fetch]);

  return { isLoading, error, roles };
}
