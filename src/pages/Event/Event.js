import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Vimeo from '@u-wave/react-vimeo';
import './Event.scss'

const Event = () => {
  const navigate = useNavigate();
  const cerrarSesion = () => {
    localStorage.setItem('isLoggedIn', false);
    navigate('/');
  }
  return (
    <>
    { localStorage.getItem('isLoggedIn') ? 
    <div className='live'>
      <h1>Evento en vivo</h1>
      <Vimeo
        video="348721737"
        width={350}
        responsive={false}
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