
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { api } from "../api/register_api";
import "../scss/update_style.css";


/**
  * Este componente maneja la actualización de información de perfil del usuario en la página "China". 
  * Permite cambiar la foto de perfil y contraseña.

*/

export function Update_china() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageSize, setSelectedImageSize] = useState({
    width: 100,
    height: 100,
  });

  /**
  * Obtiene el nombre de usuario almacenado en la sesión.
  * @returns {string|null} El nombre de usuario almacenado, o null si no existe.
  */
  const getStoredUsername = () => {
    return sessionStorage.getItem("username");
  };

  /**
  * Obtiene el correo electrónico almacenado en la sesión.
  * @returns {string|null} El correo electrónico almacenado, o null si no existe.
  */
  const getStoredEmail = () => {
    return sessionStorage.getItem("email");
  };

  /**
  * Maneja el cambio de contraseña.
  * @param {Event} event - El evento de cambio.
  */
  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const profilePic = sessionStorage.getItem("foto");

  const [showModal2, setShowModal2] = useState(false);

  /**
  * Abre el modal 2.
  */
  const handleModalOpen2 = () => {
    setShowModal2(true);
  };

  /**
  * Cierra el modal 2.
  */
  const handleModalClose2 = () => {
    setShowModal2(false);
  };

  /**
  * Maneja la selección de una imagen.
  * @param {string} image - La URL de la imagen seleccionada.
  */
  const handleImage = (image) => {
    setSelectedImage(image);
    const img = new Image();
    img.onload = () => {
      setSelectedImageSize({ width: img.width, height: img.height });
    };
    img.src = image;
  };

  /**
  * Maneja la presentación de la imagen seleccionada y realiza acciones relacionadas.
  */

  const handleSubmit2 = () => {
    // AquÃ­ puedes realizar acciones con la URL de la imagen seleccionada
    sessionStorage.removeItem("foto", selectedImage);
    console.log("URL de la imagen seleccionada:", selectedImage);
    sessionStorage.setItem("foto", selectedImage);

    const storedUsername = sessionStorage.getItem("username");
    const profilePic = sessionStorage.getItem("foto");

    axios;
    api
      .post("/update/", { username: storedUsername, foto: profilePic })
      .then((response) => {
        console.log("Se han actualizado los campos");
        //sessionStorage.removeItem("username");
        //navigate("/inicio");
      })
      .catch((error) => {
        console.error("Error al realizar el update", error);
      });
  };

  /**
  * Maneja el envío del formulario y actualiza la contraseña.
  */
  const handleSubmit3 = () => {
    const contraInput = document.getElementById("contra");
    if (!contraInput.value) {
      alert('Debes llenar el campo "contra".');
    } else {
      const storedUsername = sessionStorage.getItem("username");

      axios;
      api
        .post("/china/update_contra/", {
          username: storedUsername,
          password: newPassword,
        })
        .then((response) => {
          console.log("Se ha actualizado la contraseña");
          //sessionStorage.removeItem("username");
          //navigate("/inicio");
        })
        .catch((error) => {
          console.error("Error al realizar el update", error);
        });
    }
  };

  const imagen = "/images/perfil/imagen.png";
  const imagen2 = "/images/perfil/imagen1.png";
  const imagen3 = "/images/perfil/imagen2.png";
  const imagen4 = "/images/perfil/imagen3.png";
  const imagen5 = "/images/perfil/imagen4.png";
  const imagen6 = "/images/perfil/imagen5.avif";
  const imagen7 = "/images/perfil/imagen6.avif";
  const imagen8 = "/images/perfil/imagen7.png";
  const imagen9 = "/images/perfil/imagen8.png";
  const imagen10 = "/images/perfil/imagen9.png";
  const imagen11 = "/images/perfil/imagen10.png";
  const imagen12 = "/images/perfil/imagen11.png";
  const imagen13 = "/images/perfil/imagen12.png";
  const imagen14 = "/images/perfil/imagen13.png";
  const imagen15 = "/images/perfil/imagen14.png";
  const imagen16 = "/images/perfil/imagen15.png";

  //////////////////////////////////////// contraseña /////////////////
  const [showModal3, setShowModal3] = useState(false);

  const handleModalOpen3 = () => {
    setShowModal3(true);
  };

  const handleModalClose3 = () => {
    setShowModal3(false);
  };

  return (
    <>
      <main className="formulario-settings">
        <div className="container custom-container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-10">
              <div className="card h-200 border-1 shadow-sm">
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white d-flex flex-column justify-content-center align-items-center"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <img
                      src={profilePic}
                      alt="Avatar"
                      className="img-fluid img-thumbnail rounded-circle my-5"
                      style={{ width: "180px" }}
                    />
                    <h5>{getStoredUsername()}</h5>
                    <div>
                      <button
                        className="btn btn-warning mb-3 form-control-lg"
                        type="button"
                        onClick={handleModalOpen2}
                      >
                        Cambia tu avatar
                      </button>
                    </div>
                  </div>

                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Informacion</h6>
                      <hr />
                      <div className="row pt-1">
                        <div className="col-6">
                          <h6>Email</h6>
                          <p className="text-muted">{getStoredEmail()}</p>
                        </div>
                        <div className="col-6">
                          <h6>Username</h6>
                          <p className="text-muted">{getStoredUsername()}</p>
                        </div>
                      </div>
                      <h6>Contraseña</h6>
                      <hr />
                      <div className="row">
                        <div className="col-6">
                          <h6>Cambia tu contraseña</h6>
                          <div>
                            <button
                              className="btn form-control"
                              type="button"
                              onClick={handleModalOpen3}
                            >
                              Cambiar contraseña
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Modal
              show={showModal2}
              onHide={handleModalClose2}
              centered
              backdrop="static"
            >
              <Modal.Header closeButton>
                <Modal.Title>Escoge tu foto de perfil</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="image-container text-center">
                  {selectedImage && (
                    <div className="selected-image-container mb-5">
                      <h6 className="mb-5">Imagen seleccionada:</h6>
                      <div
                        className="selected-image-wrapper"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "150px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={selectedImage}
                          alt="Imagen seleccionada"
                          className="selected-image text-center"
                          style={{ width: "40%", height: "auto" }}
                        />
                      </div>
                    </div>
                  )}
                  <img
                    src={imagen}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen)}
                  />
                  <img
                    src={imagen2}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen2 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen2)}
                  />
                  <img
                    src={imagen3}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen3 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen3)}
                  />
                  <img
                    src={imagen4}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen4 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen4)}
                  />
                  <img
                    src={imagen5}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen5 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen5)}
                  />
                  <img
                    src={imagen6}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen6 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen6)}
                  />
                  <img
                    src={imagen7}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen7 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen7)}
                  />
                  <img
                    src={imagen8}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen8 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen8)}
                  />
                  <img
                    src={imagen9}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen9 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen9)}
                  />
                  <img
                    src={imagen10}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen10 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen10)}
                  />
                  <img
                    src={imagen11}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen11 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen11)}
                  />
                  <img
                    src={imagen12}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen12 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen12)}
                  />
                  <img
                    src={imagen13}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen13 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen13)}
                  />
                  <img
                    src={imagen14}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen14 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen14)}
                  />
                  <img
                    src={imagen15}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen15 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen15)}
                  />
                  <img
                    src={imagen16}
                    alt="Imagen"
                    className={`square-image ${
                      selectedImage === imagen16 ? "selected" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                    onClick={() => handleImage(imagen16)}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="submit"
                  variant="secondary"
                  onClick={() => {
                    handleModalClose2();
                    handleSubmit2();
                  }}
                >
                  Enviar
                </Button>
                <Button
                  type="submit"
                  variant="secondary"
                  onClick={handleModalClose2}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal
              show={showModal3}
              onHide={handleModalClose3}
              centered
              backdrop="static"
            >
              <Modal.Header>
                <Modal.Title>
                  ¿Realmente deseas cambiar tu contraseña?
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <label htmlFor="" Ingresa tu nueva ccontraseña></label>
                  <input
                    type="password"
                    id="contra"
                    placeholder="Ingresa tu nueva ccontraseña"
                    className="form-control"
                    value={newPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="submit"
                  variant="secondary"
                  onClick={() => {
                    handleModalClose3();
                    handleSubmit3();
                  }}
                >
                  Enviar
                </Button>

                <Button
                  type="submit"
                  variant="secondary"
                  onClick={handleModalClose3}
                >
                  cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </main>
    </>
  );
}
