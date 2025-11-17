import "./Component.css";

function Header({setVista}) {
  return (
    <>
      <section className="Fondo-azul container">
        <article>
          <div class="row mt-5 justify-content-between text-center">
            <div class="col-3">
              <button onClick={()=>{setVista("Bruno")}}>Inicio</button>
            </div>
            <div class="col-3">
              <button onClick={()=>{setVista("Skills")}}>Skills</button>
            </div>
            <div class="col-3">
              <button>Proyectos</button>
            </div>
            <div class="col-3">
              <button>Confesiones</button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Header;
