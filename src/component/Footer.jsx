// src/component/Footer.jsx
// =============================================
// 🧿 Footer de contacto
// - Fijo abajo
// - Estilo "Crypto Futuro"
// - Contiene info de contacto y redes
// =============================================

function Footer() {
  return (
    <footer className="footer-crypto">
      <div className="footer-inner">
        <h4 className="footer-title">Contacto</h4>

        <p className="footer-item">
          Email: <a href="mailto:brunococco.dev@gmail.com">brunococco.dev@gmail.com</a>
        </p>

        <p className="footer-item">
          Teléfono: <a href="tel:+34123456789">+34 123 456 789</a>
        </p>

        <p className="footer-item">
          GitHub:{" "}
          <a
            href="https://github.com/BrunoCocco"
            target="_blank"
            rel="noreferrer"
          >
            github.com/BrunoCocco
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
