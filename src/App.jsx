import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/routes/ProtectedRoute";
import RouteApp from "./components/routes/RouteApp";
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";


function App() {

  return (
    
    <BrowserRouter>
      <Routes>
      <Route 
          path="/" 
          element={<HomePage/>} 
        />
        <Route 
          path="/Login" 
          element={<LoginPage/>} 
        />
        <Route 
          path="/*" 
          element={
            <ProtectedRoute>
              <RouteApp/>
            </ProtectedRoute>    
          }

        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

