import axios from 'axios';
import { notifyError, notifyOk } from '../toastify/Toastify';

export const handleSubmit = async (values, { setSubmitting, setNavigate}) => {

  try {
    const response = await axios.post('https://api.saldo.com.ar/bridge/login', {
      email: values.email,
      password: values.password
    });

    if (response.status === 200 && values.email === "admin@saldo.com.ar" && values.password === "CoolSite") {
      notifyOk("Credenciales correctas. Redireccionando...")
      sessionStorage.setItem("nameUser", response.data.name)
      sessionStorage.setItem("validUser", true)

      setTimeout(() => {
        
        setNavigate("/Systems", { replace: true })

      }, 2000);
      
    } else {
      notifyError('Error al iniciar sesión')
    }
  } 
  catch (error) {
    notifyError('Tus credenciales son incorrectas')
    notifyError(`${error.message}`)
  } 
  finally {
    setSubmitting(false);
  }
};