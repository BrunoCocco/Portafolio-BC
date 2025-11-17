import { useState } from "react";
//Componentes Header
import Header from "./component/Header.jsx";
// Footer 
import Footer from "./component/Footer.jsx"
//Vistas alojadas en layout{}
import Bruno from "./layouts/VistaBruno.jsx";
import Skills from "./layouts/VistaSkills.jsx";
// Css
import "./App.css"
//Import de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [vista, setVista] = useState("");
  return (
    <>
      <Header setVista={setVista} />

      {vista === "Bruno" && <Bruno />}
      {vista === "Skills" && <Skills />}

      <Footer />
    </>
  );
}

export default App;
