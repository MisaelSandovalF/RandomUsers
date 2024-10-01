import { useEffect, useState } from "react";
import Users from "./Users";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [ ]);

  async function getData() {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const userData = data.results[0];
      setUserInfo(userData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  return (

    <>

{!loading ? (
    <div>
      <button onClick={() => getData()}>Llamar Usuario</button>
      <Users userInfo={userInfo} loading={loading} />
    </div>
     ) : (
      <p>Cargando...</p>
    )}
    </>
    
  );
}

export default App;
