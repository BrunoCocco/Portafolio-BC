import { useState } from "react";

import Header from "./component/Header.jsx";
import Bruno from "./layouts/VistaBruno.jsx";
import Skills from "./layouts/VistaSkills.jsx";
import Proyectos from "./layouts/VistaProyectos.jsx";  // 👈 FIX IMPORT
import Footer from "./component/Footer.jsx";

import "./App.css"

function App() {
  const [vista, setVista] = useState("Bruno");

  function renderVista() {
    switch (vista) {
      case "Skills":
        return <Skills />;

      case "Proyectos":     // 👈 FIX SWITCH
        return <Proyectos />;

      case "Bruno":
      default:
        return <Bruno />;
    }
  }

  return (
    <>
      <Header setVista={setVista} />

      <main className="app-main">
        {renderVista()}
      </main>

      <Footer />
    </>
  );
}

export default App;
