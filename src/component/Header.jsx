import "./Component.css";

function Header() {
  return (
    <>
      <section className="container-fluid">
        <article className="header-Fondo p-3">
              <div class="row justify-content-between text-center">
                <div class="col-3">
                  <button>Inicio</button>
                </div>
                <div class="col-3">
                  <button>Skills</button>
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
