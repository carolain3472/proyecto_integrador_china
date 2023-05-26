import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { api } from "../api/register_api";

export function Update_china() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(""); // Agregado

  const getStoredUsername = () => {
    return sessionStorage.getItem("username");
  };

  const getStoredEmail = () => {
    return sessionStorage.getItem("email");
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

 

  const profilePic= sessionStorage.getItem("foto")
  

  const [showModal2, setShowModal2] = useState(false);

  const handleModalOpen2 = () => {
    setShowModal2(true);
  };

  const handleModalClose2 = () => {
    setShowModal2(false);
  };


  const handleImage = (imageUrl) => {
    setSelectedImage(imageUrl);

  };

  const handleSubmit2 = () => {
    // AquÃ­ puedes realizar acciones con la URL de la imagen seleccionada
    sessionStorage.removeItem("foto", selectedImage )
    console.log("URL de la imagen seleccionada:", selectedImage);
    sessionStorage.setItem("foto", selectedImage )

    const storedUsername = sessionStorage.getItem("username");
    const profilePic= sessionStorage.getItem("foto")
   
    axios
      api.post("/update/", { username: storedUsername, foto: profilePic })
      .then((response) => {
        console.log("Se han actualizado los campos");
        //sessionStorage.removeItem("username");
        //navigate("/inicio");
      })
      .catch((error) => {
        console.error("Error al realizar el update", error);
      });

  };


  const handleSubmit3= () => {
    const contraInput = document.getElementById('contra');
    if (!contraInput.value) {
      alert('Debes llenar el campo "contra".');
    } else{
      const storedUsername = sessionStorage.getItem("username");
    
      axios
        api.post("/china/update_contra/", { username: storedUsername, password: newPassword })
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





  const imagen=  "https://cdn-icons-png.flaticon.com/512/190/190615.png"
  const imagen2= "https://cdn-icons-png.flaticon.com/512/190/190614.png"
  const imagen3= "https://cdn-icons-png.flaticon.com/512/2397/2397449.png"
  const imagen4= "https://cdn-icons-png.flaticon.com/512/315/315051.png"
  const imagen5= "https://cdn-icons-png.flaticon.com/512/1496/1496771.png"
  const imagen6= "https://img.freepik.com/premium-vector/chinese-new-year-vector-flat-icon-chinese-fan-web-sites-apps-books-adverts-articles-other-places-vibrant-illustration_387335-297.jpg?w=2000"
  const imagen7= "https://img.freepik.com/premium-vector/chinese-new-year-vector-flat-icon-flat-chinese-dragon-mask-web-sites-apps-books-adverts-articles-other-places-vibrant-illustration_387335-315.jpg?w=2000"
  const imagen8= "https://cdn-icons-png.flaticon.com/512/6457/6457808.png"
  const imagen9= "https://i.pinimg.com/originals/a0/2d/00/a02d0002ab150a27f4d1e24e86d8e962.png"
  const imagen10= "https://cdn-icons-png.flaticon.com/512/2456/2456138.png"
  const imagen11= "https://cdn-icons-png.flaticon.com/512/678/678872.png"
  const imagen12="https://cdn-icons-png.flaticon.com/512/678/678873.png"
  const imagen13= "https://cdn-icons-png.flaticon.com/512/2456/2456042.png"
  const imagen14= "https://cdn-icons-png.flaticon.com/512/307/307471.png"
  const imagen15= "https://cdn-icons-png.flaticon.com/512/3447/3447845.png"
  const imagen16= "https://cdn-icons-png.flaticon.com/512/5465/5465148.png"



  //////////////////////////////////////// contraseña /////////////////
  const [showModal3, setShowModal3] = useState(false);

  const handleModalOpen3 = () => {
    setShowModal3(true);
  };

  const handleModalClose3 = () => {
    setShowModal3(false);
  };

  return (
    <div>
      <form >
        <div>
        <div>
            <img
              src={profilePic}
              className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
              width="200px"
              alt="profile"
            />
          </div>

          <div>
                  <button type="button" onClick={handleModalOpen2}>
                    Cambia tu avatar
                  </button>
                </div>

          <input type="text" value={getStoredUsername()} id="myInput" disabled />
          <input type="text" value={getStoredEmail()} id="myInput" disabled />
          <div>
                  <button type="button" onClick={handleModalOpen3}>
                    Cambiar contraseña
                  </button>
                </div>
          
        {/*  <button type="submit">Enviar</button> */}

          <Modal show={showModal2} onHide={handleModalClose2} centered backdrop="static">
                    <Modal.Header>
                      <Modal.Title>Escoge tu foto de perfil</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="image-container">

                      <img src={imagen} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen)}/>
                      <img src={imagen2} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginRight:'20px',  marginBottom:'20px'}} onClick={() => handleImage(imagen2)}/>
                      <img src={imagen3} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',  marginRight:'20px',  marginBottom:'20px'}} onClick={() => handleImage(imagen3)}/>
                      <img src={imagen4} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginBottom:'20px'}} onClick={() => handleImage(imagen4)}/>
                      <img src={imagen5} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen5)}/>
                      <img src={imagen6} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen6)}/>
                      <img src={imagen7} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen7)}/>
                      <img src={imagen8} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginBottom:'20px'}} onClick={() => handleImage(imagen8)} />
                      <img src={imagen9} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px' }} onClick={() => handleImage(imagen9)} />
                      <img src={imagen10} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen10)}/>
                      <img src={imagen11} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen11)} />
                      <img src={imagen12} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginBottom:'20px'}} onClick={() => handleImage(imagen12)}/>
                      <img src={imagen13} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen13)} />
                      <img src={imagen14} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen14)}/>
                      <img src={imagen15} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen15)}/>
                      <img src={imagen16} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginBottom:'20px'}} onClick={() => handleImage(imagen16)}/>
                   </div>

                    </Modal.Body>
                    <Modal.Footer>
                      <Button type="submit" variant="secondary"  onClick={() => { handleModalClose2(); handleSubmit2() }} >
                        Enviar
                      </Button>

                      <Button type="submit" variant="secondary" onClick={ handleModalClose2}>
                        cerrar
                      </Button>
                    </Modal.Footer>
                  </Modal>




                  <Modal show={showModal3} onHide={handleModalClose3} centered backdrop="static">
                    <Modal.Header>
                      <Modal.Title>¿Realmente deseas cambiar tu contraseña?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                  <div>
                  <label htmlFor=""Ingresa tu nueva ccontraseña></label>
                  <input type="text" id="contra" value={newPassword} onChange={handlePasswordChange} required  />
                  </div>

                    </Modal.Body>
                    <Modal.Footer>
                      <Button type="submit" variant="secondary"  onClick={() => { handleModalClose3(); handleSubmit3(); }} >
                        Enviar
                      </Button>

                      <Button type="submit" variant="secondary" onClick={ handleModalClose3}>
                        cerrar
                      </Button>
                    </Modal.Footer>
                  </Modal>

        </div>
      </form>
    </div>
  );
}
