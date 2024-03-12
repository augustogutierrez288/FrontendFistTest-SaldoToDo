function HeaderActivesSystems() {
    const nameUser = sessionStorage.getItem("nameUser");
  return (
    <header className='header-actives'>

    <h1>{nameUser} aquí puedes observar todas las cuentas y sus respectivos pares.</h1>

    </header>
  )
}

export default HeaderActivesSystems