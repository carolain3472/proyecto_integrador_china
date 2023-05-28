import { Nav_bar } from "../components/nav-bar";
import "../scss/fyi_style.css";

/**
 * Componente FYI.
 *
 * Esta página muestra información interesante y curiosidades sobre la cultura china.
 * Cada sección presenta un hecho o detalle relevante acompañado de una imagen ilustrativa y un párrafo descriptivo.
 */

export function FYI() {
  return (
    <>
      <Nav_bar />
      <main className="contenedor-FYI" style={{ marginTop: "64px" }}>
        <div className="contenedor-hijo-FYI">
          <div className="titulo-imagen-container  text-center">
            <h1 className="titulo-FYI  text-center">¿Sabías qué...?</h1>
            <img
              className="icono-confundido  text-center"
              src="/images/confundido.png"
              alt=""
            />
          </div>
        </div>

        <div className="contenedor-hijo-FYI-izq">
          <img src="/images/te-chino.png" alt="" />
          <p>
            1. ¡Sabías que el arte del té tiene una gran importancia en la
            cultura china! La ceremonia del té es una práctica tradicional que
            implica la preparación y degustación de té de una manera muy
            cuidadosa y ritualizada. Además de ser una bebida popular, el té
            también tiene propiedades medicinales y simboliza la armonía y la
            tranquilidad.
          </p>
        </div>

        <div className="contenedor-hijo-FYI-der">
          <img src="/images/escritura.png" alt="" />
          <p>
            2. ¿Sabías que la escritura china es una de las más antiguas del
            mundo y ha influido en la creación de otros sistemas de escritura
            asiáticos? Los caracteres chinos, llamados hanzi, son pictográficos
            y logográficos, lo que significa que representan ideas y conceptos,
            no solo sonidos.
          </p>
        </div>

        <div className="contenedor-hijo-FYI-izq">
          <img src="/images/muralla-china.png" alt="" />
          <p>
            3. ¡Sabías que la Gran Muralla China es visible desde el espacio!
            Esta impresionante estructura se extiende a lo largo de más de
            21,000 kilómetros y es uno de los mayores logros arquitectónicos de
            la humanidad.
          </p>
        </div>

        <div className="contenedor-hijo-FYI-der">
          <img src="/images/pergamino.png" alt="" />
          <p>
            4. ¿Sabías que el papel, uno de los inventos más importantes de la
            historia, fue creado por los chinos? Fue durante la dinastía Han,
            alrededor del siglo II a.C., cuando se desarrolló esta invención
            revolucionaria que cambió la forma en que la información se
            transmitía y almacenaba.
          </p>
        </div>
      </main>
    </>
  );
}
