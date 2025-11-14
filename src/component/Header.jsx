import "./Component.css";

function Header() {
  return (
    <>
      <div className="col-2 bg-dark text-white p-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              proyectos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              confesiones
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;