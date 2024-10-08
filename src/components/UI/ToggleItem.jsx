
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

function ToggleItem( ) {

    
    const { setUrl, checkcallusers, setCheckcallusers, user , setUser } = useContext(UserContext);
    
  const change = (e) => {
    setCheckcallusers(e.target.checked);

    console.log(checkcallusers);

    if (checkcallusers) {
      setUser("Usuario")
      setUrl("https://randomuser.me/api/");
    } else {
      setUser("Usuarios")
      setUrl("https://randomuser.me/api/?results=5");
    }
  };



  return (

    <label  className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={change}
        checked={checkcallusers}
      />
      <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-400 dark:peer-focus:ring-gray-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Desplegar lista</span>
    </label>
  )
}

export default ToggleItem