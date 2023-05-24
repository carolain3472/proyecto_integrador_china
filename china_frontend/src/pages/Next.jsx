import { Logout_china } from "../components/logout_china";
import { Update_china } from "../components/update_china";
import "../scss/next_styles.css";

export function Next() {
  const username = sessionStorage.getItem("username");
  const profilePic = sessionStorage.getItem("profile");

  return (
    <>
      <div className="contenedor-next-padre">

        <div className="contenedor-next-hijo-izq">
          {/* Model --
          Aqui podemos agregar un modelo 3D para que quede
          a la izquierda como el diseño Figma
          */}
          
        </div>

        <div className="contenedor-next-hijo-cent">
          <div className="text-center">
            <img
              src=" "
              className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
              width="200px"
              alt="profile"
            />
          </div>
          <h1 className="titulo-next">Bienvenido {username}</h1>
          <button className="vamos">¡Iniciemos!</button>
        </div>

        <div className="contenedor-next-hijo-der">
          <p className="parag-next">
            ¡Es hora de iniciar <br />
            nuestro recorrido <br />
            por China antigua!
          </p>
        </div>
      </div>
    </>

    /*       
      <div>Next
        <Update_china/>
        <Logout_china/>
    </div> */
  );
}
