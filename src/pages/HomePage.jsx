import { Link } from 'react-router-dom'
import { Redirect } from '../components/routes/redirect'

function HomePage() {

  Redirect();

  return (

    <header className='w-100 h-100 d-flex justify-content-center align-items-center'>
      <section className='w-100 h-100 d-flex flex-column justify-content-center align-items-center gap-3'>

        <h1 className='text-center'>Front-End first test</h1>
        <h2>SaldoAr To-Do</h2>
        <Link to="/Login" className='btn-links'>Iniciar Sesion</Link>
      </section>
    </header>
    
  )
}

export default HomePage