import {Routes, Route} from 'react-router-dom';
import SystemsPage from '../../pages/SystemsPage';
import AsideSystems from '../aside/AsideSystems';
import SystemsActives from '../../pages/SystemsActives';
import SystemsActivesRates from '../../pages/SystemsActivesRates';
import PagesNotFound from '../../pages/PagesNotFound';

function RouteApp() {
  return (
    <header className='container-fluid w-100 h-100'>
      <section className='row w-100 h-100'>
        <AsideSystems/>
        <Routes>
          <Route
            path="/Systems"
            element={<SystemsPage />} 
          />
          <Route
            path="/Systems/Actives"
            element={<SystemsActives />} 
          />
          <Route
            path="/Systems/Actives/Rates/:idAccount"
            element={<SystemsActivesRates />} 
          />
          <Route 
            path="*" 
            element={<PagesNotFound />}
            />
          </Routes>
      </section>
    </header>
  )
}

export default RouteApp