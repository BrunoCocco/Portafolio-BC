import "./Component.css";

function Header({ setColorTexto }) {
  return (
    <header className="container-fluid header-Fondo">
      <img
        className="mt-3 header-img-fantasma"
        src="../src/assets/fantasma.png"
        alt="Fantasmita"
      />
      <div className="row mt-3">
        <div className="col-md-4 ">
          <h2 className="text-center">pinta amarillo</h2>
        <button onClick={() => setColorTexto('yellow')}>
        Amarillo
      </button>
        </div>
        <div className="col-md-4 ">
          <h2 className="text-center">Hoa mundo desde el Header</h2>
      <button onClick={() => setColorTexto('red')}>Rojo</button>
        </div>
        <div className="col-md-4">
          <h2 className="text-center">Hoa mundo desde el Header</h2>
      <button onClick={() => setColorTexto('blue')}>Azul</button>
        </div>
      </div>
      <h2>reset</h2>
      <button onClick={() => setColorTexto('black')}>Reset</button>
    </header>
  );
}

export default Header;
