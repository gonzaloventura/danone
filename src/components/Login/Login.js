import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.scss'
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import db from "../../helpers/FirebaseConfig";
import moment from 'moment/moment';
import Swal from 'sweetalert2';

const Login = () => {
  const [success, setSuccess] = useState()
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    isLogged: false
  })
  const [data, setData] = useState([]);
  const [pass, setPass] = useState(false);
  const navigate = useNavigate();

  // const getData = async () => {
  //   const dataCollection = collection(db, 'usuarios')
  //   const dataSnapshot = await getDocs(dataCollection)
  //   const dataList = dataSnapshot.docs.map( (doc) => {
  //       let usuario = doc.data()
  //       usuario.id = doc.id
  //       return usuario
  //   })
  //   return dataList;
  // }

  useEffect(() => {
    if (localStorage.getItem('id') != null){
      navigate('/event');
    }
    // } else {
    //   getData()
    //   .then((res) => {
    //   setData(res);
    // });
    // }
  }, [])

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value.toLowerCase()})
  }

  function checkPassword() {
    formData.password === 'danoneday' ? setPass(true) : setPass(false)
  }

  function validateName(name) { 
    if(name !== ''){
      return true
    } else {
      return false
    }
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

  function checkIfIsLogged(email) {
    const user = data.find(element => element.email == email);
    if (user != null){
      return(user.isLogged);
    } else {
      return false
    }
  }

  function checkIfIsExist(email) {
    const user = data.find(element => element.email == email);
    if (user != null){
      return user.id
    } else {
      return false
    }
  }

  const pushData = async (newOrder) => {
    const collectionOrder = collection(db, 'usuarios')
    const orderDoc = await addDoc(collectionOrder, newOrder)
    localStorage.setItem("id", orderDoc.id)
  }
  

  const handlesubmit = (e) => {
    e.preventDefault();
    checkPassword();
    if (validateName(formData.name) && validateEmail(formData.email) && validatePassword(formData.password)){
      localStorage.setItem("id", formData.email)
      setTimeout(()=>{navigate('/event')}, 800)
    } else {
      Swal.fire(
        'Datos incorrectos',
        'Por favor, intente nuevamente',
        'error'
      )
    }
  }
  
  return (
    <div className='login__card'>
        <form onSubmit={handlesubmit}>
            <input name='name' onChange={handleChange} type='text' placeholder='Nombre y Apellido' /> 
            <input name='email' onChange={handleChange} type='text' placeholder='Email' /> 
            <input name='password' onChange={handleChange} type='password' placeholder='Contraseña' /> 
            <button type='submit'>Ingresar</button>
        </form>
    </div>
  )
}

export default Login