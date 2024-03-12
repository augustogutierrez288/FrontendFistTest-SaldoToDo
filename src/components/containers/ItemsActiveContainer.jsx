import { useEffect, useState } from 'react';
import { getSystems } from '../hook/getSystems';
import {filterSystems} from '../../utility/filterSystems';
import ItemsActives from '../items/ItemsActives';

function ItemsActiveContainer() {

  const [systems, setSystems] = useState([ ]);
  const [errorApi, setErrorApi] = useState(null);

  useEffect(() => {
      const fetchSystems = async () => {
          try {
              const systemsData = await getSystems("https://api.saldo.com.ar/v3/systems");
              const systemsFilter = filterSystems(systemsData.data, "fiat")
              setSystems(systemsFilter);
          } catch (error) {
              setErrorApi(error.message);
              console.error(errorApi)
          }
      };

      fetchSystems();
  }, [ ]);
    
  return (
    <section className='table-accounts'>
      <article className='table-accounts-item'>
          <p className='title-logo'>
              Logo
          </p>
          <p className='title-name'>
              Nombre
          </p>
          <p className='title-currency'>
              Moneda
          </p>
          <p className='title-market'>
              Tipo
          </p>
          <div className='title-rates'>
              Enlace
          </div>
      </article>
      {
        systems.map((element) => <ItemsActives key={element.id} account={element} />)
      }
    </section>
    
  )
}

export default ItemsActiveContainer