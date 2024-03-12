import { useEffect, useState } from 'react';
import { getSystems } from '../hook/getSystems';
import { convertJsonToArray } from '../../utility/convertJsonToArray';
import ItemsHome from '../items/ItemsHome';

function ItemsHomeContainer() {

    const [systems, setSystems] = useState([ ]);
    const [errorApi, setErrorApi] = useState(null);

    useEffect(() => {
        const fetchSystems = async () => {
            try {
                const systemsData = await getSystems("https://api.saldo.com.ar/json/rates/banco");
                const array = convertJsonToArray(systemsData)
                setSystems(array);
            } catch (error) {
                setErrorApi(error.message);
                console.error(errorApi)
            }
        };

        fetchSystems();
    }, [ ]);
    
    return (
        <section className='w-100 d-flex justify-content-start align-items-center gap-4 mt-5'>
            {
                (
                systems.map((element) => (
                    <ItemsHome key={element.id} active={element} />
                ))
            )
            }
        </section>
        
    )
}

export default ItemsHomeContainer