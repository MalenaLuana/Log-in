import { useState } from "react";

export default function HandleErrors ({input}){


    const [keep,setKeep]=useState({})
    
    const regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
  
    const  strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")

 
    if(input)  {

      //---mail ---
     if(input.email.length > 0 && !regexEmail.test(input.email))  keep.email= 'El e-mail ingresado no es valido.'
     if(regexEmail.test(input.email) || input.email.length==0)  keep.email= null
 
     //----name ---
     if(input.name.length > 16) keep.name= 'El usuario puede tener un máximo de 16 caracteres'
     if(input.name.length===0)  keep.name= null
   
     //---password---
     if(input.password.length>0 && input.confirmPassword.length>0 && input.password!==input.confirmPassword) {
        
        keep.password='Las contraseñas no coinciden'
    
    }
   
    if(input.password.length > 0 && !strongPassword.test(input.password) ){
     keep.strongPassword='La contraseña debe contener al menos 8 caracteres, una mayúscula y un número'
    }
    if(strongPassword.test(input.password) ) keep.strongPassword=null
    if(input.password.length===0){ 
        
        keep.password= null }
 
    }
    
    
    return(
        <div>
            <p>{keep.email}</p>
            <p>{keep.name}</p>
            <p>{keep.password}</p>
            <p>{keep.strongPassword}</p>
        </div>
    )
    
}