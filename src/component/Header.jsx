// src/component/Header.jsx
// =============================================
// 🧭 Header de navegación principal
// - Fijo arriba
// - Botones con ícono + texto
// - Cambia la sección central de la App
// =============================================

import fantasma from "../assets/fantasma.png";
import hombre from "../assets/hombre.png";
import proyecto from "../assets/proyecto.png";

function Header({ setVista }) {
  return (
    <header className="crypto-header">
      <nav className="nav-container">

        {/* === SOBRE MÍ === */}
        <button
          className="nav-btn"
          onClick={() => setVista("Bruno")}
        >
          <img src={fantasma} alt="Icono sobre mí" className="btn-icon" />
          Sobre mí
        </button>

        {/* === SKILLS === */}
        <button
          className="nav-btn"
          onClick={() => setVista("Skills")}
        >
          <img src={hombre} alt="Icono skills" className="btn-icon" />
          Skills
        </button>

        {/* === PROYECTOS – AÚN NO DISPONIBLE === */}
        <button
          className="nav-btn nav-disabled"
          disabled
        >
          <img src={proyecto} alt="Icono proyectos" className="btn-icon" />
          Proyectos
        </button>

      </nav>
    </header>
  );
}

export default Header;
