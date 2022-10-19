import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Vimeo from '@u-wave/react-vimeo';
import './Event.scss'
import Countdown from '../../components/Countdown/Countdown';
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
      <Countdown />
      <button className='logout' onClick={cerrarSesion}>Cerrar sesión</button>
    </div>
    :
    <div className='live'>
      <h1>Para visualizar el vivo, deberás iniciar sesión</h1>
      <button className='login'><Link to={'/'}>Iniciar sesión</Link></button>
    </div>
    }
    </>
  )
}

export default Event