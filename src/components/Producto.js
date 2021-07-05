import React, {Component,useState } from "react"
import {Link} from "react-router-dom"
import {Card} from 'react-bootstrap/'
import {Button} from 'react-bootstrap'
import EcommerceContext from "../context/EcommerceContext"

const style = { 
  card:{width: '18rem', marginBotton:"10px"},
  button:{marginLeft:"5px",},
  link:{color:"white"},
  mensajes:{backgroundColor:"#255",color:"white",}
 }

 function Producto (props) {
   
    const verDetalle = (props.verDetalle!==false?true:false);
    const extendida = (props.extendida==true?true:false)
    const id = props.id
    const {price,name,description} = props.data
    const [mensaje,setMensaje]=useState("")

    const comprar = ()=>{  
          setMensaje("¡Gracias por su compra!")
    }

   
    return(
            <EcommerceContext>
              { 
              
              context=>
                  <Card style={style.card}>
                    <Card.Body>
                      <Card.Title>Nombre:{name}</Card.Title>
                        {
                          extendida && 
                            <>
                              <Card.Text>
                              Descripcion: {description} 
                              <br></br>
                              Id:{id} 
                              <br></br>
                              Precio:{price}
                              </Card.Text>
                            </>
                        }

                        { 
                          context.userLogin &&
                          <Button variant="primary" onClick={comprar}>Comprar</Button>
                        }
                        
                       { 
                        verDetalle &&
                        <Button style={style.button} variant="primary" ><Link style={style.link} to={"/producto/"+id}>Ver Detalle</Link></Button>
                       }
                       
                    </Card.Body>
                    <Card.Text style={style.mensajes}>
                          {mensaje}
                        </Card.Text>
                </Card>
              }
              
          </EcommerceContext>
                
          )
  }

 export default Producto;
 
 