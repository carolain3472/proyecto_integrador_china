import React from 'react';
import { Nav_bar } from "../components/nav-bar";
import "../scss/sobre_nosotros_style.css";

/**
 * Componente Sobre_nosotros.
 *
 * Esta página presenta información sobre nuestra aplicación y el equipo detrás de ella.
 * Ofrece una descripción general de la aplicación y presenta a los miembros del equipo de desarrollo.
 */

export function Sobre_nosotros() {
  return (
    <>
      <Nav_bar />
      <main className="contenedor-aboutUs" style={{ marginTop: "64px" }}>
        <div className="contenedor-hijo-aboutUs">
          <h1 className="titulo-aboutUs">
            ¡Bienvenid@ a nuestra aplicación sobre la civilización antigua
            china!{" "}
          </h1>
        </div>
        <div className="contenedor-hijo-aboutUs">
          <p className="aboutUs-p">
            Aquí encontrarás información fascinante y detallada sobre la rica
            historia y cultura de una de las civilizaciones más antiguas del
            mundo. Nuestro equipo de apasionados desarrolladores ha trabajado
            arduamente para crear esta plataforma interactiva, con el objetivo
            de compartir conocimientos y despertar el interés por la antigua
            China.
          </p>
        </div>
        <div className="contenedor-hijo-aboutUs">
          <p className="team-aboutUs">conoce nuestro equipo</p>
        </div>
        <div className="contenedor-imagenes">
          <div className="tarjeta-info text-white bg-dark">
            <img className="profile-image-pic img-thumbnail" src="/images/carolainJimenez.jpeg" alt="Imagen 1" />
            <p>Carolain Jimenez Bedoya</p>
            <p style={{color: "grey"}}>Backend developer</p>
          </div>
          <div className="tarjeta-info text-white bg-dark">
            <img className="profile-image-pic img-thumbnail" src="/images/hernandoLopez.jpg" alt="Imagen 2" />
            <p>Hernando Lopez Rincon</p>
            <p style={{color: "grey"}}>Frontend developer</p>
          </div>
          <div className="tarjeta-info text-white bg-dark">
            <img className="profile-image-pic img-thumbnail" src="/images/nataliaLopez.PNG" alt="Imagen 3" />
            <p>Natalia Lopez Osorio</p>
            <p style={{color: "grey"}}>Backend developer</p>
          </div>
        </div>
      </main>
    </>
  );
}
