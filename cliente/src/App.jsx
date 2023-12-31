import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RegistroPage } from './pages/RegistroPage';
import { RegistroFormPage } from './pages/RegistroFormPage';
import { Navegacion } from './components/Navegacion';
import { BusquedaPage } from './pages/BusquedaPage';
import { Toaster } from 'react-hot-toast';

/**
 * Componente principal que define las rutas de la aplicación.
 * Utiliza react-router-dom para la gestión de rutas.
 * @component
 * @returns {JSX.Element} - Elemento JSX que representa la aplicación.
 */
function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        {/* Barra de navegación */}
        <Navegacion />

        {/* Definición de rutas */}
        <Routes>
          <Route path='/' element={<Navigate to='/client/list' />} />
          <Route path='/client/list' element={<RegistroPage />} />
          <Route path='/client/create' element={<RegistroFormPage />} />
          <Route path='/filtrar' element={<BusquedaPage />} />
          <Route path='/client/list/:id' element={<RegistroFormPage />} />
        </Routes>

        {/* Toast para mostrar notificaciones */}
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
