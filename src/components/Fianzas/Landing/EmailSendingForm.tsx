import { useEffect, useRef, useState } from "react";
import { Spinner } from "./Spinner";
import './css/EmailSendingForm.css';

export const EmailInputForm: React.FC<{ sendEmailHandler: any, cancelHandler:any}> =( { sendEmailHandler, cancelHandler}) => {
    const [ emailOk, setEmailOk] = useState(false);
    const [ inputEmail, setInputEmail] = useState('');
    const [spinnerOn, setSpinnerOn] = useState<boolean>(false);
    const [sentEmail, setSentEmail] = useState(false);

    const inputRef = useRef<any>();

    useEffect( ()=>{
        if( inputRef.current )
            inputRef.current.focus()
    },[])
    useEffect( ()=> {
        const emailRegex = new RegExp( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        const emailMatch = inputEmail.match(emailRegex);
        if( emailMatch  ){
            setEmailOk(true);
        } else {
            setEmailOk(false);
        }
    },[inputEmail])

    function onSendEmail(){
        sendEmailHandler(inputEmail,setSpinnerOn, setSentEmail);
    }

    return (
    <div className='email-input-form'>
        
        <input type='text' placeholder='...ingresa una direccion de correo' ref={inputRef} disabled={sentEmail} value={inputEmail} onChange={ (e)=>setInputEmail(e.target.value)} ></input>
        { sentEmail ? <p>&#9989; Correo enviado!</p> :
        <div className='buttons'>
            <button onClick={ onSendEmail} disabled={!emailOk} className='btn-fianzas-outline'>Enviar</button>
            <button className='btn-fianzas' onClick={cancelHandler}>Cancelar</button>
             { spinnerOn && <Spinner />}
        </div>}
    </div>
        
)}