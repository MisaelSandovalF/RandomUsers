function Users({ userInfo }) {
  

  const {
    name: { first },
    email,
    registered: { date },
    location: { country },
    phone,
    picture: { large },
  } = userInfo;

  return (
    <div>
      <div>
        <p>Nombre: {first}</p>
        <p>email: {email}</p>
        <p>registro: {date}</p>
        <p>pais: {country}</p>
        <p>telefono: {phone}</p>
        <img src={large} alt="User profile" />
      </div>
    </div>
  );
}

export default Users;
