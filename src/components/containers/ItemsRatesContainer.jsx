import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSystems } from '../hook/getSystems';
import { convertJsonToArray } from '../../utility/convertJsonToArray';
import ItemsRates from '../items/ItemsRates';
import LoadingComponent from "../loading/LoadingComponent";

function ItemsRatesContainer() {
    const {idAccount} = useParams();
    const [loading, setLoading] = useState(true);
    const [systems, setSystems] = useState([]);
    const [errorApi, setErrorApi] = useState(null);
  
    useEffect(() => {

        const fetchSystems = async () => {

            try {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
                
                const systemsData = await getSystems(`https://api.saldo.com.ar/json/rates/${idAccount}`);
                const array = convertJsonToArray(systemsData)
                setSystems(array);
                
                
            } catch (error) {
                setErrorApi(error.message);
                console.error(errorApi)
            }

        };

        fetchSystems();

    }, [ idAccount ]);

  return (
    <section className='container-rates'>
        {
            loading ? <LoadingComponent/> 
            :
            systems.length > 1 
            ? 
            systems.map((active) =><ItemsRates key={active.id} active={active}/>) 
            : 
            <p>Actualmente {idAccount} no cuenta con pares de activos</p>
        }
    </section>
  )
}

export default ItemsRatesContainer