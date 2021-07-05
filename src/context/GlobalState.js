import React,{useState} from "react";
import EcommerceContext from "./EcommerceContext";

function GlobalState(props){
    const [userLogin,setUserLogin]= useState ( localStorage.getItem("login"));
    const loginUser=()=>{
        setUserLogin(true);
        localStorage.setItem("login",true)
    }
    const logoutUser=()=>{
        setUserLogin(false)
        localStorage.removeItem("login")
    }
    return(
         <EcommerceContext.Provider
           value={{
               userLogin:userLogin,
               loginUser: loginUser,
               logoutUser:logoutUser
           }}
         >
         {props.children}
           
         </EcommerceContext.Provider>

    )

}
export default GlobalState;
