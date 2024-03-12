import { Navigate } from 'react-router-dom';

export function ProtectedRoute({children}) {
   
    const validUser = sessionStorage.getItem("validUser");

    if(validUser){
        return children
    }else{
        return <Navigate to='/Login'/>
    }
}

export default ProtectedRoute


