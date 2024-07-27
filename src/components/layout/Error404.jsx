import { Link } from 'react-router-dom';  // Importa Link desde react-router-dom
import image from '../../assets/img/image_error404.svg';
import '../../assets/css/error404.css';

export function Error404() {
  return (
    <div className="container">
      <div className="content">
        <img src={image} className="image" alt="404 Error" />
        <div className="text-content">
          <h1 className="title">¡Oops! Página no encontrada.</h1>
          <p className="text">
          Lo sentimos, pero la página que estás buscando no se encuentra en nuestro sitio.
          </p>
          {/* Utiliza Link para enlazar al inicio */}
          <Link to="/" className="button">Volver a la página de inicio</Link>
        </div>
      </div>
    </div>
  );
}