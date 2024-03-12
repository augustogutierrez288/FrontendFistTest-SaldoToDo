import { useState } from 'react';

function HeaderHomeSystems() {
    const nameUser = sessionStorage.getItem("nameUser");

    const [money, setMoney] = useState("1.000.000,00")

    return (
        <section className='header-home-systems'>
            <article className='header-home-systems-user'>
            <h1>¡Bienvenido! {nameUser}</h1>
            <h2>Tu saldo disponible para intercambiar</h2>
            <h3>$ {money}</h3>
            </article>
            
            <article className='header-home-systems-buttons'>

            <button type='button'>
                Transferir
            </button>
            <button type='button'>
                Retirar
            </button>
            <button type='button'>
                Intercambiar
            </button>
            <button type='button'>
                Tarjetas
            </button>
            <button type='button'>
                Ahorro
            </button>
            <button type='button'>
                Puntos SaldoAr
            </button>

            </article>

        </section>
    )
}

export default HeaderHomeSystems