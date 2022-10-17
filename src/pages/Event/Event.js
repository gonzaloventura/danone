import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Vimeo from '@u-wave/react-vimeo';
import './Event.scss'
import {updateDoc, doc } from "firebase/firestore";
import db from "../../helpers/FirebaseConfig";
import moment from 'moment/moment';

const Event = () => {
  const navigate = useNavigate();
  const localId = localStorage.getItem('id')

  const cerrarSesion = () => {
    updateDoc(doc(db, 'usuarios', localId), {isLogged: false, logout: moment().format('LLL')})
    localStorage.removeItem('id');
    navigate('/');
  }
  return (
    <>
    { localStorage.getItem('id') !== null ? 
    <div className='live'>
      <h1>Evento en vivo</h1>
      <Vimeo
        video="383041858"
        width={350}
        showTitle={false}
        speed={false}
        pip={false}
        showAuthor={false}
      />
      <button className='logout' onClick={cerrarSesion}>Cerrar sesión</button>
    </div>
    :
    <div className='live'>
      <h1>Para visualizar el vivo debes estar conectado</h1>
      <button className='login'><Link to={'/'}>Iniciar sesión</Link></button>
    </div>
    }
    </>
  )
}

export default Event