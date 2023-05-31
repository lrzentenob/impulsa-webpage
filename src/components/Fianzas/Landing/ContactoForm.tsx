import { useState } from 'react';
import './css/ContactForm.css';
import api from '../../../api/api';
export const ContactoForm = () => {
    
    const [isSent, setIsSent] = useState(false);
    function onCloseModalWindow() {
      const modal = document.getElementById("contact-component");
      modal!.style.display = "none";
    }
    function onSend(){
  
      setTimeout( ()=>{
        setIsSent(true);
      },1000)
    }
    return (
      <div id="contact-component" className="chat-modal-window">
        <div className="chat-content">
          <div className="chat-content-form">
            <div className="chat-header">
              <p>Contáctanos</p>
              <span className="chat-close" onClick={onCloseModalWindow}>
                &times;
              </span>
            </div>
            <div className="chat-body-login">
              {isSent && <h3>Muchas gracias por contactarnos, un ejecutivo te llamará a la brevedad!</h3>}
              { !isSent &&
                <>
              <div className="input-container">
                <h3>Nombre</h3>
                <input type="text" placeholder="Escribe tu nombre"></input>
              </div>
              <div className="input-container">
                <h3>Correo electronico</h3>
                <input type="text" placeholder="Correo electronico"></input>
              </div>
              <div className="input-container">
                <h3>Escribe un comentario</h3>
                <textarea placeholder="Escribenos un comentario con tus datos de contacto. Nombre y algun telefono donde podamos llamarte..."></textarea>
              </div>
              <button className="btn2" onClick={onSend}>
                Enviar
              </button>
              </>}
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  