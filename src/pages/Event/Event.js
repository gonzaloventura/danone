import React from 'react'
import Vimeo from '@u-wave/react-vimeo';
import './Event.scss'

const Event = () => {
  const cerrarSesion = () => {
    alert("Acción Cerrar sesión");
  }
  return (

    <div className='live'>
      <h1>Para visualizar el vivo debes estar conectado</h1>
      <button className='login' onClick={cerrarSesion}>Iniciar sesión</button>
    </div>
    // <div className='live'>
    //   <h1>Evento en vivo</h1>
    //   <Vimeo
    //     video="348721737"
    //     width={350}
    //     responsive={false}
    //   />
    //   <button className='logout' onClick={cerrarSesion}>Cerrar sesión</button>
    // </div>
  )
}

export default Event