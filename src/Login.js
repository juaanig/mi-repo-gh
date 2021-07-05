import React,{useState,useContext} from "react" 
import firebase from "./firebase"
import {Container} from 'react-bootstrap'
import ButtonWithLoading from "./components/forms/ButtonWithLoading"
import EcommerceContext from "./context/EcommerceContext"

function Login () {   
  const context = useContext(EcommerceContext);
  const [form,setForm] = useState ({email:'',contraseña:''})
  const [loading,setLoading] = useState(false);

  const handleSubmit = (event)=>{ 
  event.preventDefault();
   setLoading(true);
   console.log(form)
   firebase.auth().signInWithEmailAndPassword(form.email,form.contraseña)
   .then(data=>{
      setLoading(false)
      console.log("Login ok",data);
      context.loginUser();
    })
  .catch(error=>{
    setLoading(false)
    console.log("Error",error);
    })
  }      
          
  const handleChange =(event) =>{
    const name = event.target.name
    const value = event.target.value
    console.log(name,value)
    setForm ({...form,[name]:value})
  }

          
    
  return(
        <Container>
             <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}></input>
               <br></br>
                    <label>Contraseña</label>
                    <input type="password" name="contraseña" value={form.contraseña} onChange={handleChange}></input>
               <br></br>
               <ButtonWithLoading text="Ingresar" loading={loading}/>
             </form>
        </Container>
  )

      

 }

 export default Login;