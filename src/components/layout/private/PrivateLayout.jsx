import { Outlet } from 'react-router-dom';
import { HeaderPriv } from './HeaderPriv';
import { Sidebar } from './Sidebar';

export const PrivateLayout = () => {
  return (
    <>
      {/* Cabecera y Navegación */}
      <HeaderPriv />

      {/* Contenido principal */}
      <section className="layout__content">
        <Outlet />
      </section>

      {/* Barra Lateral */}
      <Sidebar />

    </>
  );
};
