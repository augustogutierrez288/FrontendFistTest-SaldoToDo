import { ToastContainer } from 'react-toastify';
import FormikLogin from '../auth/FormikLogin';
import logo from '../../assets/img/logo.webp';
import image from '../../assets/img/image-login.webp';



function FormLogin() {

  return (
    <>

      <section className='container-form col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 w-40 h-100 d-flex flex-column justify-content-center align-items-center gap-3'>
        <ToastContainer
          stacked
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition: Bounce
        />
        <img className='container-form-img' src={logo} alt='logo saldoAr'/>

        <h1 className='container-form-title'>Iniciar Sesion</h1>

        <FormikLogin/>

      </section>
      <section className='col-8 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block w-60 h-100 d-flex justify-content-center align-items-center p-0'>
            <figure className='w-100 h-100'>
              <img className=' w-100 h-100 object-fit-cover' src={image} alt='image login' />
            </figure>
      </section>

    </>
  )
}

export default FormLogin