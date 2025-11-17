// ============================================================
// 🟡 VistaSkills.jsx
// Sección de habilidades y enfoque profesional Web3
// ============================================================

function VistaSkills() {
  return (
    <section className="skills-section container">

      {/* TÍTULO PRINCIPAL */}
      <h1 className="skills-title">Habilidades & Enfoque</h1>

      {/* TEXTO INTRODUCTORIO */}
      <p className="skills-intro">
        Trabajo todos los días para convertirme en un desarrollador capaz de
        construir y auditar soluciones Web3 reales. No estudio por moda, estudio
        porque creo en la tecnología que va a gobernar los próximos 20 años.
      </p>

      {/* BLOQUE DESTACADO */}
      <article className="skills-block">
        <h2 className="skills-sub">🚀 Core del aprendizaje</h2>
        <p>
          Mi camino está enfocado en dominar el ecosistema Blockchain desde la base:
          Solidity, Hardhat, EVM, smart contracts, control de gas, auditorías,
          patrones de seguridad y despliegue real sobre testnets/mainnet.
        </p>
      </article>

      {/* LISTA DE SKILLS */}
      <div className="skills-grid">

        <div className="skill-card">
          <h3>⚡ Solidity</h3>
          <p>Smart Contracts, ERC-20, ERC-721, testing con Hardhat.</p>
        </div>

        <div className="skill-card">
          <h3>⚙ Hardhat</h3>
          <p>Scripts de deploy, testing automatizado, gas tracking.</p>
        </div>

        <div className="skill-card">
          <h3>🌐 React</h3>
          <p>Componentes, hooks, UI dinámica, consumo de API Web3.</p>
        </div>

        <div className="skill-card">
          <h3>🪪 Web3.js</h3>
          <p>Interacción dApp → contrato → blockchain.</p>
        </div>

        <div className="skill-card">
          <h3>🐳 Docker</h3>
          <p>Entorno aislado para dev Web3 y fullstack.</p>
        </div>

        <div className="skill-card">
          <h3>🧠 Mentalidad</h3>
          <p>Disciplina, constancia, iteración diaria, visión a largo plazo.</p>
        </div>

      </div>

      {/* BLOQUE FINAL MOTIVACIONAL */}
      <article className="skills-block">
        <h2 className="skills-sub">🛠 Próximo objetivo</h2>
        <p>
          Construir proyectos Web3 end-to-end: smart contract + front + tests +
          despliegue en red pública. No para jugar: para operar en producción.
        </p>
      </article>

    </section>
  );
}

export default VistaSkills;
