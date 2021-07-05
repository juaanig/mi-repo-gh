import React from "react" 
import {Link, link} from "react-router-dom"
import {Navbar,Nav} from 'react-bootstrap'
import Option from "./option"
import EcommerceContext from "../../context/EcommerceContext"

 function Menu (props) {
     
      
         
   return(
            <EcommerceContext>
               { context =>
                  <div>
                     <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">E-MOTOS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                           <Nav className="mr-auto">
                              {
                                 context.userLogin && 
                                 <>
                                 <Option path="/" label="Home"/>
                                 <Nav.Link  onClick={()=>context.logoutUser(false)}>Salir</Nav.Link>
                                 </>
                              }
                              { !context.userLogin &&
                                 <>
                                 <Option path="/Alta" label="Registro"/>
                                 <Option path="/sesion" label="Login"/>
                                 </>
                                 
                              }
                              
                           </Nav> 
                        </Navbar.Collapse>   
                     </Navbar>
                  </div>
               }
                 
            </EcommerceContext>
   )

      

 }

 export default Menu;
 