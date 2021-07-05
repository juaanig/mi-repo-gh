import React , {useState,useEffect} from "react" 
import Producto from "./Producto"
import firebase from "../firebase"


 function Detalle (props) {
     const id = props.match.params.id;
     const [producto,setProducto] = useState ( {} );
     const [loading,setLoading] = useState (true);

     
     useEffect (
        () => {
          
            firebase.db.doc("productos/"+id)
            .get()
            .then(doc=>{
                console.log("Doc",doc)
                setProducto(doc)
                setLoading(false)
                
            })
               },
            []
    )

      
     if (loading){
         return(
             /**/
             <div>
                 LODING...
             </div>
         )
     } else {       
          return(
              /**/ 
                <div>
                    <Producto id={producto.id} data={producto.data()} verDetalle={false} extendida={true} />
               </div>
          )
       }
      

 }

 export default Detalle;
 
