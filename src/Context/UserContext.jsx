import { createContext } from "react";
import { useEffect, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://randomuser.me/api/");
  const [user, setUser] = useState("Usuario")
  const [checkcallusers, setCheckcallusers] = useState(false);

  useEffect(() => {
    getData();
  }, [url]);

  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const userData = data.results;
      setUserInfo(userData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        userInfo,
        loading,
        getData,
        setUrl,
        setCheckcallusers,
        checkcallusers,
        user,
        setUser,

      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
