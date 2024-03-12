import { Link, useParams } from 'react-router-dom';
import MainRatesSystems from '../main/MainRatesSystems';

function HeaderRatesSystems() {
    const {idAccount} = useParams()
    const nameUser = sessionStorage.getItem("nameUser");

    return (
        <header className='header-rates-systems'>

            <section className='header-rates-systems-button'>
                <Link to='/Systems/Actives'>Volver</Link>
            </section>

            <h1 className='header-rates-systems-title'>{nameUser} estos son los pares del activo {idAccount}</h1>

            <MainRatesSystems/>
        </header>
    )
}

export default HeaderRatesSystems