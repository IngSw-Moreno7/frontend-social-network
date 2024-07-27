import { Outlet } from 'react-router-dom';
import { HeaderPub } from './HeaderPub';

export const PublicLayout = () => {
  return (
    <>
      {/* LAYOUT */}
      <HeaderPub />

      {/* Contenido principal */}
      <section className="layout__content">
        <Outlet />
      </section>
    </>
  );
};
