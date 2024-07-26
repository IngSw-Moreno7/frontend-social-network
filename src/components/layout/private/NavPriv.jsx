import avatar from "../../../assets/img/user.png";

export const NavPriv = () => {
  return (
    <nav className="navbar__container-lists">

      <ul className="container-lists__menu-list">
        <li className="menu-list__item">
          <a href="#" className="menu-list__link">
            <i className="fa-solid fa-house"></i>
            <span className="menu-list__title">Inicio</span>
          </a>
        </li>
        <li className="menu-list__item">
          <a href="#" className="menu-list__link">
            <i className="fa-solid fa-list"></i>
            <span className="menu-list__title">Timeline</span>
          </a>
        </li>
        <li className="menu-list__item" key="gente">
          <a href="#" className="menu-list__link">
            <i className="fa-solid fa-users"></i>
            <span className="menu-list__title">Gente</span>
          </a>
        </li>
        <li className="menu-list__item" key="mensajes">
          <a href="#" className="menu-list__link">
            <i className="fa-regular fa-envelope"></i>
            <span className="menu-list__title">Mensajes</span>
          </a>
        </li>
      </ul>

      <ul className="container-lists__list-end">
        <li className="list-end__item">
          <a href="#" className="list-end__link-image">
            <img src={avatar} className="list-end__img" alt="Imagen de perfil" />
          </a>
        </li>
        <li className="list-end__item">
          <a href="#" className="list-end__link">
            <span className="list-end__name">Nick</span>
          </a>
        </li>
        <li className="list-end__item">
          <a href="#" className="list-end__link">
            <i className="fa-solid fa-gear"></i>
            <span className="list-end__name">Ajustes</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}