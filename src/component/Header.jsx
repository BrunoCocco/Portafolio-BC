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


      {/* <header className="container-fluid header-Fondo">
        <div className="row mt-3">
            <h2 className="text-center mb-5">“Un paso diario sin conciencia te aleja; un paso diario con propósito te transforma.”</h2>
          <div className="col-md-4 ">
            <h2>Bruno Cocco!.</h2>
            
            <button className="mt-4" onClick={() => setColorTexto("yellow")}>SobreMi</button>
          </div>
          <div className="col-md-4 ">
            <h2 className="text-center">Hoa mundo desde el Header</h2>
            <button onClick={() => setColorTexto("red")}>Rojo</button>
          </div>
          <div className="col-md-4">
            <h2 className="text-center">Hoa mundo desde el Header</h2>
            <button onClick={() => setColorTexto("blue")}>Azul</button>
          </div>
        </div>
        <h2>reset</h2>
        <button onClick={() => setColorTexto("black")}>Reset</button>
      </header> */}
