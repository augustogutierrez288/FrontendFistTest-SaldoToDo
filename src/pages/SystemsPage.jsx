import { ToastContainer } from 'react-toastify';
import HeaderHomeSystems from '../components/header/HeaderHomeSystems'
import MainHomeSystems from '../components/main/MainHomeSystems'

function SystemsPage() {

  return (
    <section className='col-7 home-systems'>
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
      
      <HeaderHomeSystems/>

      <div className='line'></div>

      <MainHomeSystems/>

    </section>
   
  )
}

export default SystemsPage