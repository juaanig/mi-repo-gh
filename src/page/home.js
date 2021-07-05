import React , {useState,useEffect} from "react" 
import Producto from "../components/Producto"
import firebase from "../firebase"

 function Home (props) {
     
     const [productos,setProductos] = useState ( [] );
     const [loading,setLoading] = useState (true);
     
        useEffect (
            () => {
               
                firebase.db.collection("productos")
                .get()
                .then(querySnapshot=>{ 
                  console.log(querySnapshot.docs)
                  setProductos(querySnapshot.docs)
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
                    
                    {productos.map(producto=><Producto key={producto.id} id={producto.id} data={producto.data()}/>)}
                        
               </div>
            )
        }
      

 }

 export default Home;
 