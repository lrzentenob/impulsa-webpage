import { useEffect, useState } from "react";
import io from "socket.io-client";

import "./css/ContactForm.css";

const socket = io(import.meta.env.VITE_API_URL);

interface MessageData {
  id: string;
  user: string;
  message: string;
  origin: "CLIENT" | "SERVER";
  message_time: string;
}

export const ChatWindow: React.FC = () => {

const [isConnected, setIsConnected] = useState(socket.connected);
const [text,setText] = useState('');
const [user,setUser] = useState('');
const [room, setRoom]  = useState('');
const [chatStarted, setChatStarted] = useState(false);

  function onCloseModalWindow() {
    const modal = document.getElementById("chat-window-component");
    modal!.style.display = "none";
    resetChat();
  }

  useEffect(() => {
    socket.on('connect', () => {
        setIsConnected(true);
      });

      socket.on('disconnect', () => {
        setIsConnected(false);
      });

      socket.on('server-message',onServerMessage)

    return () =>{
        socket.off('connect');
        socket.off('disconnect');
        socket.off('server-message');
    }
  }, []);

  function onServerMessage(data:any) {
      const msg = JSON.parse(data);
      const newMessage:MessageData = {
        id: msg.message_time,
        user: msg.user,
        message: msg.message,
        origin: "SERVER",
        message_time: msg.message_time
      }
      displayMessage(newMessage);

  }

  function resetChat(){
    setChatStarted(false);
    setUser('');
    setRoom('');
    
  }
  function onSendMessage(){
    
    const newMessage:MessageData = {
      id: (Date.now()).toString(),
      user,
      message: text,
      origin: "CLIENT",
      message_time: '12:40 pm'
    }
    displayMessage(newMessage)
    socket.emit('client-message',JSON.stringify(newMessage));
    setText('');
  }

  async function displayMessage( message: MessageData){
    const rootDoc = document.getElementById("#conversation-container-node")
    
    const divNode = document.createElement('div');
    const divChatMessage = document.createElement('div');

    divNode.appendChild(divChatMessage);
    const divMessageHeader = document.createElement('div');
    divChatMessage.appendChild(divMessageHeader);
    const pMessage = document.createElement('p');
    pMessage.textContent = message.message;
    divChatMessage.appendChild(pMessage);

    const pUser = document.createElement('p');
    pUser.textContent = message.user
    divMessageHeader.appendChild(pUser);
    const pTime = document.createElement('p');
    pTime.textContent = message.message_time;
    divMessageHeader.appendChild(pTime);
    
    divNode.classList.toggle("chat-message-container");
    divChatMessage.classList.toggle("chat-message")
    divChatMessage.classList.toggle("chat-message-client")
    
    divMessageHeader.classList.toggle("message-header")
    pUser.classList.toggle("message-header-sender");
    pTime.classList.toggle("message-header-time");
    pMessage.classList.toggle("message-text")

    if( message.origin === 'SERVER' ){
      divNode.classList.toggle('chat-message-container');
      divChatMessage.classList.toggle('chat-message-client');
    }
    rootDoc?.appendChild(divNode);
    
  }
  

  return (
    <div id="chat-window-component" className="chat-modal-window">
      <div className="chat-content">
        {!isConnected && 
          <>
            <div className="chat-content-form">
              <div className="chat-header">
              <p>Bienvenido al chat de Impulsa Asesores!</p>
                <span className="chat-close" onClick={onCloseModalWindow}>&times;</span>
              </div>
                <div className="chat-body-login">
                    <div className="input-container">
                      <h3>Mil disculpas, el chat no esta disponible
                      </h3>
                </div>
              </div>
            </div>
          </>}
        {!chatStarted && isConnected &&
          <div className="chat-content-form">
          <div className="chat-header">
            <p>Bienvenido al chat de Impulsa Asesores!</p>
            <span className="chat-close" onClick={onCloseModalWindow}>&times;</span>
          </div>

          <div className="chat-body-login">
              <div className="input-container">
              <h3>Nombre de usuario</h3>
                <input type="text" placeholder="Escribe un nombre o alias" value={user} onChange={(e:any) =>setUser(e.target.value)}></input>
              </div>
              <div className="input-container">
                <h3>Sala de chat</h3>
                <input type="text" placeholder="Seguros, Fianzas, Consultoría, Riesgos" value={room} onChange={(e:any) =>setRoom(e.target.value)}></input>
              </div>
              <button className="btn2" onClick={()=>{ setChatStarted(true)}} disabled={!user}>Iniciar Chat</button>
          </div>  
        </div>}

        { chatStarted &&
        <>
        <h1>{`Hola! ${user} `}</h1>
        <div className="chat-content-form">

          <div className="chat-header">
            <p>Bienvenido al chat de Impulsa Asesores!</p>
            <span className="chat-close" onClick={onCloseModalWindow}>&times;</span>
          </div>
          <div className="chat-body">
            <div className="chat-body-col chat-body-left">
              <div className="chat-info">
                <div className="chat-info-rooms">
                  <h3>Sala de Chat</h3>
                  <ul>
                    <li>{room}</li>
                  </ul>
                </div>
                <div className="chat-info-users">
                  <h3>Usuarios</h3>
                  <ul>
                    <li>Andrea</li>
                    <li>{user}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="chat-body-col chat-body-right" id="#conversation-container-node">



            </div>
          </div>
          <div className="chat-footer">
            <div className="input-container">
              <input type="text" placeholder="...Escribe un mensaje" value={text} onChange={(e:any) =>setText(e.target.value)}></input>
            </div>
            <button className="btn" onClick={onSendMessage} disabled={!text}>Enviar</button>
          </div>
        </div>
        </>}  
      </div>
    </div>
  );
};
