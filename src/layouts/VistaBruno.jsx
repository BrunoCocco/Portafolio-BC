import "./layout.css"; // 👈 el CSS lo hacemos abajo
import hombre from "../assets/hombre.png";


function Bruno() {
  return (
    <section className="container py-5">
      <div className="row d-flex align-items-center justify-content-center">
        
        <div className="col-md-5 text-center">
          <img
            src={hombre} 
            alt="Foto de Bruno"
            className="bruno-img"
          />
        </div>

        <div className="col-md-7">
          <h1 className="bruno-title">Bruno Cocco</h1>
          <p className="bruno-desc mt-3">
            Desarrollador web y entusiasta de la tecnología blockchain.
            Combino diseño funcional, lógica sólida y visión estratégica para crear
            soluciones digitales que realmente aportan valor. En constante evolución,
            aprendiendo y construyendo cada día.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bruno;