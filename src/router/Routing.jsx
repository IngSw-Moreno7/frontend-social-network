import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { Login } from '../components/user/Login';
import { Register } from '../components/user/Register';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { Feed } from '../components/publication/Feed';
import { Error404 } from '../components/layout/Error404';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Register />} />
        </Route>
        {/* Rutas privadas */}
        <Route path="/rsocial" element={<PrivateLayout />}>
          <Route index element={<Feed />} />
          <Route path="feed" element={<Feed />} />
        </Route>
        {/* Ruta componenete Erros404 */}
        <Route path="*" element={<Error404 />} />

        
      </Routes>
    </BrowserRouter>
  );
};
