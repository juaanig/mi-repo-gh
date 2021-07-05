import { render } from '@testing-library/react';
import React, {useEffect, useState} from 'react'

function ContenidoFuncion(){
        
    const [texto,setTexto] = useState('');

    /*
    useEffect(
        () => {
            console.log('componentDidMount - hook equivalente');
        },[]);

    useEffect(
        () => {
            console.log('componentDidUpDate - hook equivalente');
         });

    useEffect(
        () => {
            console.log('componentDidUpdate - solo si cambia el estado del texto');
        },[texto]);
 
    useEffect( ()=> {
        return () => {
            console.log('componentWillUnmount - hook equivalente');
        }
    },[]);
        */
    
    return (
                <div>

               </div>
        )
    
        
       
    
}
export default ContenidoFuncion