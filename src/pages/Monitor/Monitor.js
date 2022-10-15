import React, {useEffect, useState} from 'react'
import './Monitor.scss'
import { collection, query, where, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import db from "../../helpers/FirebaseConfig";

const Monitor = () => {
    const [formData, setFormData] = useState({
        user:'',
        password:''
      })
      const [data, setData] = useState([]);
      const [pass, setPass] = useState(false);
      const [admin, setAdmin] = useState(false);

    const getData = async () => {
        const dataCollection = collection(db, 'usuarios')
        const dataSnapshot = await getDocs(dataCollection)
        const dataList = dataSnapshot.docs.map( (doc) => {
            let usuario = doc.data()
            usuario.id = doc.id
            return usuario
        })
        return dataList;
      }
    
      useEffect(() => {
          getData()
          .then((res) => {
          setData(res);
        });
      }, [])

      useEffect(() => {
        (localStorage.getItem('rol') === "admin") ? setAdmin(true) : setAdmin(false);
      }, [])

    const handlesubmit = (e) => {
        e.preventDefault();
        checkPassword();
        if (validateUser(formData.user) && validatePassword(formData.password)){
            setAdmin(true);
            localStorage.setItem("rol", "admin");
        } else {
          alert("Datos incorrectos")
        }
      }

      function validateUser(user) { 
        if(user !== ''){
          return true
        } else {
          return false
        }
      }

      function validatePassword(password) { 
        if(password === '4dm1n'){
          return true
        } else {
          return false
        }
      }

      function checkPassword() {
        formData.password === '4dm1n' ? setPass(true) : setPass(false)
      }

      const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
      }


  return (
    <>
    {!admin  ? 
    <div className='login__card'>
        <form onSubmit={handlesubmit}>
            <input name='user' onChange={handleChange} type='text' placeholder='Usuario' /> 
            <input name='password' onChange={handleChange} type='password' placeholder='Contraseña' /> 
            <button type='submit'>Ingresar</button>
        </form>
    </div> 
    :
    <>
    <h3>Total en linea: {data.filter(users => users.isLogged === true).length}</h3>
    <h3>Total usuarios registrados: {data.length}</h3>
    <div className='monitor__card'>
      <table>
                <tr>
                  <th>Nombre y Apellido</th>
                  <th>Email</th>
                  <th>Fecha y hora de Login</th>
                  <th>Fecha y hora de Logout</th>
                  <th>Estado</th>
                </tr>
      {data.map((data) => (
            <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.login}</td>
                <td>{data.logout}</td>
                <td>{data.isLogged ? <span style={{color: 'lightgreen'}}>ONLINE</span> : <span style={{color: 'red'}}>OFFLINE</span>}</td>
            </tr>
          ))
        }
              </table>
    </div>
    </>
    }
    </>
  )
}

export default Monitor