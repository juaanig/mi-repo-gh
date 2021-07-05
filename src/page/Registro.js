import React,{useState} from "react" 
import firebase from "../firebase"
//import Button from 'react-bootstrap/Button'

import ButtonWithLoading from "../components/forms/ButtonWithLoading"
import FormGroup from "../components/forms/FormGroup"
 function Registro () {
          const [form,setForm] = useState ({nombre:'',apellido:'',email:'',contraseña:''});
          const [loading,setLoading] = useState(false);
          const handleSubmit = (event)=>{ 
              event.preventDefault();
              setLoading(true);
              firebase.auth().createUserWithEmailAndPassword(form.email,form.contraseña)
              .then(data=>{
                console.log("Registro",data.user.uid)
                firebase.db.collection("Usurarios").add({
                      nombre: form.nombre,
                      apellido:form.apellido,
                      email:form.email,
                      userId:data.user.uid,
                })
                .then(data=>{
                  setLoading(false)
                  console.log(data);
                })
                .catch(error=>{
                  setLoading(false)
                  console.log("Error add",error)
                })

              }) 
              .catch(error=>{
                setLoading(false)
                console.log("Error",error)
              })       
            }      
          
          const handleChange =(event) =>{
             const name = event.target.name
             const value = event.target.value
             console.log(name,value)
             setForm ({...form,[name]:value})
          }

          
    
          return(
            
         
            <form onSubmit={handleSubmit}>
              <FormGroup label="Nombre" name="nombre" type="text" placeholder="ingrese su nombre" value={form.nombre} change={handleChange}/>
              <FormGroup label="Apellido" name="apellido" type="text" placeholder="ingrese su apellido" value={form.apellido} change={handleChange}/>
              <FormGroup label="Email" name="email" type="email" placeholder="ingrese su email" value={form.email} change={handleChange}/>
              <FormGroup label="contraseña" name="contraseña" type="password" placeholder="ingrese un contraseña" value={form.contraseña} change={handleChange}/>
              
               <ButtonWithLoading text="Registrarse" loading={loading}/>                 
            </form>
         
          )

      

 }

 export default Registro ;
