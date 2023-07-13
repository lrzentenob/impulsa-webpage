import { useEffect, useState } from 'react';
import './css/ContactForm.css';
import api from '../../../api/api';
import { Spinner } from './Spinner';
import axios, { AxiosHeaders } from 'axios';

export const ContactoForm = () => {
    
    const [isSent, setIsSent] = useState(false);
    const [spinner, setSpinnerOn] = useState(false);
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailOk, setEmailOk] = useState(false);
    const [comment, setComment] = useState('');

    function onCloseModalWindow() {
      const modal = document.getElementById("contact-component");
      modal!.style.display = "none";
    }
    const emailFromPath = () =>{
      const pathName = window.location.pathname;
      
      if(  pathName.indexOf('fianzas') > -1 )
        return "fianzas@impulsaasesores.mx"
      if(  pathName.indexOf('seguros') > -1 )
        return "seguros@impulsaasesores.mx"
      if(  pathName.indexOf('riesgos') > -1 )
        return "riesgos@impulsaasesores.mx"
      if(  pathName.indexOf('consultoria') > -1 )
        return "consultoria@impulsaasesores.mx"

      return '';
         
    }
    async function onSend(){

      const fromEmail = emailFromPath();
      const toEmail = `${email}`;
      const AC = 'd-792f3aa1368a4ab79d994e1918a2b34b'
      const nombre = `${name}`;
      const comentario = `${comment}`;
      
      try {
          setSpinnerOn( true);
          const apiRes = api.post(`contacto.php?fromEmail=${fromEmail}&toEmail=${toEmail}&AC=${AC}&name=${nombre}&comment=${comentario}`,{
            Remitente_Contacto: name,
            Mensaje_Contacto: comment
          });
          
          setSpinnerOn( false);
          setIsSent(true); 
      }
      catch(e){
          setSpinnerOn( false);
          console.log(e);
          alert('Se produjo un error al intentar enviar el correo...')
      }      
    }
    
    useEffect( ()=> {
      const emailRegex = new RegExp( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      const emailMatch = email.match(emailRegex);
      if( emailMatch  ){
          setEmailOk(true);
      } else {
          setEmailOk(false);
      }
  },[email])

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
              {isSent && <h3>Muchas gracias por contactarnos, se envio un correo a {email}un ejecutivo te llamará a la brevedad!</h3>}
              { !isSent &&
                <>
              <div className="input-container">
                <h3>Nombre</h3>
                <input type="text" placeholder="Escribe tu nombre" value={name} onChange={(e:any)=>setName(e.target.value)}></input>
              </div>
              <div className="input-container">
                <h3>Correo electronico</h3>
                <input type="text" placeholder="Correo electronico" value={email} onChange={(e:any)=>setEmail(e.target.value)}></input>
              </div>
              <div className="input-container">
                <h3>Escribe un comentario</h3>
                <textarea placeholder="Escribenos un comentario con tus datos de contacto. Nombre y algun telefono donde podamos llamarte..." value={comment} onChange={(e:any)=>setComment(e.target.value)}></textarea>
              </div>
              <button className="btn2" onClick={onSend} disabled={ ( !emailOk || !name || !comment)}>
                { !spinner ? "Enviar" : <Spinner />}
              </button>
              </>}
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  