import { useContext, useState } from "react";
import { UserContext } from "./Context/UserContext";
import UserCard from "./components/UI/UserCard";
import UserList from "./components/UI/UsersList";
import ToggleCheck from "./components/UI/ToggleCheck";

function App() {
  const { loading, getData, checkcallusers, user } = useContext(UserContext);
  


  return (
    <main className="bg-[#f2f4f4] ">
      <section className="bg- lg:w-1/2 movil:w-10/12 min-h-dvh m-auto bg-[#e5e8e8] border-x-[#e5e7e9] border-x-2  flex flex-col items-center gap-3 
      "> 
      <button
        onClick={() => getData()}
        className=" bg-[#4d5656] text-[#f8f9f9] px-2 py-1 rounded-md w-10/12 my-3  hover:bg-[#5d6d7e] active:bg-[#99a3a4]"
      >
        {`Llamar a ${user}`}
      </button>

      <ToggleCheck
        
      />

      {!loading ? (
        !checkcallusers ? (
          <div className="flex flex-col justify-center movil:max-w-[50%] movil:min-w-[200px] lg:max-w-[500px] lg:min-w-[500px]:" >
            <UserCard />
          </div>
        ) : (
          <div className="flex flex-col justify-center movil:max-w-[50%] movil:min-w-[200px] lg:max-w-[500px] lg:min-w-[500px]:">
            <UserList />
          </div>
        )
      ) : (
        <p>Cargando...</p>
      )}

</section>
    </main>
  );
}

export default App;
