import FormLogin from '../components/forms/FormLogin'
import { Redirect } from '../components/routes/redirect'

function LoginPage() {

  Redirect()

  return (
    <header className='container-fluid w-100 h-100 d-flex justify-content-center align-items-center'>
      <section className='row w-100 h-100'>
        <FormLogin/>
      </section>
    </header>
  )
}

export default LoginPage