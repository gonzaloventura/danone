import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div className='login__card'>
        <form>
            <input type='text' placeholder='Email' /> 
            <input type='text' placeholder='Contraseña' /> 
            <button type='submit'>Ingresar</button>
        </form>
    </div>
  )
}

export default Login