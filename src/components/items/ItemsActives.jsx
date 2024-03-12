import { Link } from 'react-router-dom';
import {findLogo} from '../../utility/findLogo';

function ItemsActives({account}) {

    const image = findLogo(account.id)
  return (
    
    <article className='table-accounts-item'>
        <div className='logo'>
            <img src={image} alt={account.id}/>
        </div>
        <p className='name'>
            {account.attributes.name}
        </p>
        <p className='currency'>
            {account.attributes.currency}
        </p>
        <p className='market'>
            {account.attributes.market}
        </p>
        <div className='button'>
            <Link to={(`/Systems/Actives/Rates/${account.id}`)}>Pares</Link>
        </div>
    </article>
  )
}

export default ItemsActives