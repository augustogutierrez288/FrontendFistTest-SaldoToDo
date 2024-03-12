import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.webp';
import home from '../../assets/img/homa.png';
import money from "../../assets/img/money.png";
import p2p from '../../assets/img/p2p.png';
import trading from '../../assets/img/trading.png';
import setting from '../../assets/img/setting.png';
import logged from '../../assets/img/output.png';

function AsideSystems() {

  const history = useNavigate()

  const output = () =>{
    sessionStorage.removeItem("validUser");
    history("/Login", {replace: true})
  }

  return (
    <aside className='col-5 aside'>

      <figure className='aside-figure'>
        <img className='aside-figure-logo' src={logo} alt="home"/>
      </figure>

      <article className='aside-article'>

        <Link className='aside-links' to="/Systems">
          <img src={home} alt="home"/>
          Inicio
        </Link>

        <Link className='aside-links' to="/Systems/Actives">
          <img src={money} alt="money"/>
          Activos
        </Link>

        <Link className='aside-links' to="*">
          <img src={p2p} alt="p2p"/>
          Mercado P2P
        </Link>

        <Link className='aside-links' to="*">
          <img src={trading} alt="trading"/>
          Trading
        </Link>

        <Link className='aside-links' to="*">
          <img src={setting} alt="setting"/>
          Ajustes
        </Link>
        
      </article>

      <div className='aside-line'></div>

      <article className='aside-article'>

        <button className='aside-article-button' onClick={output}>
          <img src={logged} alt="output"/>
          Cerrar Sesion
        </button>

      </article>
      
    </aside>
  )
}

export default AsideSystems