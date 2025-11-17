// src/App.jsx
// =============================================
// 🌐 App Root
// - Define el layout principal de la aplicación
// - Header fijo arriba, Footer fijo abajo
// - Contenido central dinámico según "vista"
// =============================================

import { useState } from "react";

// 🔹 COMPONENTES
import Header from "./component/Header.jsx";
import Bruno from "./layouts/VistaBruno.jsx";   // 👈 FIX
import Skills from "./layouts/VistaSkills.jsx"; // 👈 FIX
import Footer from "./component/Footer.jsx";

// Css 
import "./App.css"

function App() {
  const [vista, setVista] = useState("Bruno");

  function renderVista() {
    switch (vista) {
      case "Skills":
        return <Skills />;
      case "Bruno":
      default:
        return <Bruno />;
    }
  }

  return (
    <>
      <Header setVista={setVista} />
      <main className="app-main">{renderVista()}</main>
      <Footer />
    </>
  );
}

export default App;
