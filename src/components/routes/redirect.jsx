import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Redirect(){
    const history = useNavigate()
    const validUser = sessionStorage.getItem("validUser");

    useEffect(() => {
        if(validUser){
            return history("/Systems", {replace: true})
        }
        
    }, [ validUser]);
    
}