/* eslint-disable react/prop-types */
// COMPONENTES
import UserCard from "../components/UserCard";

// HOOKS
import useDataUser from "../hooks/useDataUser";

// ESTILOS
import "../styles/Home.css";

export default function Home({email}) {
  const { dataUser } = useDataUser();

  if (!dataUser) {
    return <h1>Cargando datos...</h1>;
  } else {
    return (
      <section className="Main__Home">
        <p className="Main__Home--Email">Mi correo es: {email}</p>
        {dataUser.map(
          ({ userName, description, profileImg, isAdminUser }, index) => {
            return (
              <UserCard
                userName={userName}
                description={description}
                profileImg={profileImg}
                isAdminUser={isAdminUser}
                key={index}
              />
            );
          }
        )}
      </section>
    );
  }
}
