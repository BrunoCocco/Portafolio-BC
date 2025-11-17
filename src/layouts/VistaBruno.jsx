// =============================================
// 🧩 Componente "Bruno"
// - Sección de presentación personal
// - Mantiene coherencia visual con el Header
// =============================================

import hombre from "../assets/hombre.png";

function Bruno() {
  return (
    <section className="bruno-section container">


      <div className="row d-flex align-items-center justify-content-center">

        {/* =======================
            BLOQUE IZQUIERDO (IMAGEN)
        ======================= */}
        <div className="col-md-5 text-center">
          <img
            src={hombre}
            alt="Foto de Bruno"
            className="bruno-img"
          />
        </div>

        {/* =======================
            BLOQUE DERECHO (TEXTO)
        ======================= */}
        <div className="col-md-7">

          {/* Título principal */}
          <h1 className="bruno-title">Bruno Cocco</h1>

          {/* Descripción principal */}
          <p className="bruno-desc mt-3">
            Desarrollador web & explorador blockchain.
            Combino diseño funcional, lógica sólida y visión estratégica
            para construir herramientas digitales que generen impacto real.
            Mi filosofía es simple: <strong>crear, iterar, mejorar.</strong>
          </p>

          {/* BLOQUE 2 - Objetivo */}
          <div className="bruno-block mt-4">
            <h3 className="block-title">🎯 Objetivo</h3>
            <p className="block-text">
              Construir un portfolio sólido que represente mi evolución
              como developer y emprendedor digital.
            </p>
          </div>

          {/* BLOQUE 3 - Valores */}
          <div className="bruno-block mt-4">
            <h3 className="block-title">⚡ Mentalidad</h3>
            <p className="block-text">
              Disciplina, iteración constante, pensamiento crítico
              y visión a futuro. No espero el cambio: lo construyo.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Bruno;
