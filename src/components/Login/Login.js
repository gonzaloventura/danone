import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.scss'

const Login = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  const [pass, setPass] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  function checkPassword() {
    formData.password === 'danoneday' ? setPass(true) : setPass(false)
  }

  function validateEmail(email) { 
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        //Email valid. Procees to test if it's from the right domain (Second argument is to check that the string ENDS with this domain, and that it doesn't just contain it)
        if(email.indexOf("@danone.com", email.length - "@danone.com.ar".length) !== -1){
            return true;
        } else {
          return false;
        }
    }
  }

  function validatePassword(password) { 
    if(password === 'danoneday' || password === 'DANONEDAY'){
      return true
    } else {
      return false
    }
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    checkPassword();
    console.log("login: ", {...formData});
    console.log("formData.email: ", formData.email);
    if (validateEmail(formData.email) && validatePassword(formData.password)){
      localStorage.setItem('isLoggedIn', true);
      navigate('/event');
    } else {
      alert("Datos incorrectos")
    }
    
  }
  return (
    <div className='login__card'>
        <form onSubmit={handlesubmit}>
            <input name='email' onChange={handleChange} type='text' placeholder='Email' /> 
            <input name='password' onChange={handleChange} type='password' placeholder='Contraseña' /> 
            <button type='submit'>Ingresar</button>
        </form>
    </div>
  )
}

export default Login