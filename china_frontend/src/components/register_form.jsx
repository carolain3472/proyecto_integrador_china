import { useForm } from "react-hook-form";
import { createuser } from "../api/register_api";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export function Register_form() {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    await createuser(data);
    navigate("/login");
  });

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  // Obtener los campos observados para la validación
  const username = watch("username");
  const email = watch("email");
  const password = watch("password");

  // Verificar si todos los campos requeridos están completos
  const isFormComplete = !!username && !!email && !!password;

  return (
    <div className="padre text-center">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center fw-bold mb-0">Finding China</h1>
            <h2 className="text-center fw-bold mb-0">寻找中国</h2>
            <div className="card my-5 text-center">
              <form
                className="card-body cardbody-color p-lg-5"
                onSubmit={onSubmit}
              >
                <div>
                  <img
                    src="./src/images/login_logo.jpg"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="username"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Ingresa username"
                    {...register("username", { required: true })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingresa Email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Ingresa contraseña"
                    {...register("password", { required: true })}
                  />
                </div>
                <div>
                  <Button
                    type="button"
                    className="btn btn-danger px-5 mb-5 w-100"
                    onClick={handleModalOpen}
                    disabled={!isFormComplete}
                  >
                    Enviar
                  </Button>

                  <Modal show={showModal} onHide={handleModalClose} centered backdrop="static">
                    <Modal.Header>
                      <Modal.Title>Registro existoso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¡Bienvenid@! Te has registrado con exito</Modal.Body>
                    <Modal.Footer>
                      <Button type="submit" variant="secondary" onClick={() => { handleModalClose(); onSubmit(); }}>
                        Guardar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div className="form-text text-dark">
                  Ya tienes cuenta?
                  <a className="registrarse" href="http://localhost:5173/login">
                    
                    Inicia sesión
                  </a>
                </div>
                <div className="form-text text-dark">
                  Vuelta al menú?
                  <a
                    className="registrarse"
                    href="http://localhost:5173/inicio"
                  >
                    Click aquí
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    /*     <form  >
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>

    </form> */
  );
}
