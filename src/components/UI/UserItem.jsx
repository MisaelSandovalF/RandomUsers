import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export function UserItem() {
  const { userInfo } = useContext(UserContext);
  return (
    <>
      <h1 className="text-2xl font-medium m-auto mb-3">Usuarios</h1>

      {userInfo.length > 0 &&
        userInfo.map((data, index) => {
          return (
            <div
              key={index}
              className="bg-[#cacfd2] flex border-b-[#797d7f] border-b-4 rounded-2xl mb-4 lg:flex-row movil:flex-col   "
            >
              <div className="  pt-4 lg:border-r-2 lg:border-r-gray-500 movil:border-b-gray-500 ">
                <img
                  src={data.picture.large}
                  alt="User profile "
                  className="rounded-full  lg:mx-4 movil:m-auto "
                />
                <p className="text-center my-2 font-mono font-bold">
                  {data.name.first}
                </p>
              </div>

              <div className=" flex flex-col justify-center lg:gap-1  font-mono lg:px-2 lg:border-t-0 lg:basis-1/2 movil:px-3 movil:pb-3 movil:rounded-t-md movil:border-t-4 movil:border-t-[#797d7f] movil:py-2 
              ">
                <p className="movil:text-xs  lg:text-base  ">
                  <span className="font-bold">
                  Email:{" "}
                  </span>
                    {data.email}
                </p>
                <p className="movil:text-sm lg:text-base">
                  <span className="font-bold ">
                  Registro:{" "}
                  </span>
                    {data.registered.date}
                </p>
                <p className="movil:text-sm lg:text-base">
                  <span className="font-bold ">
                  Pais:{" "}
                  </span>
                    {data.location.country}
                </p>
                <p className="movil:text-sm lg:text-base">
                  <span className="font-bold ">
                  Telefono:{" "}
                  </span>
                    {data.phone}
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
}
