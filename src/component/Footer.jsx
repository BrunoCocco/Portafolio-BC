// =============================================
// 🟠 Footer con precio BTC Live
// =============================================
import useBTCPrice from "../hooks/useBTCPrice.js";

function Footer() {
  const btc = useBTCPrice();

  return (
    <footer className="footer-crypto">
      <div className="footer-inner">
        <h4 className="footer-title">Contacto</h4>

        <p className="footer-item">
          Email:{" "}
          <a href="mailto:brunococco.dev@gmail.com">brunococco.dev@gmail.com</a>
        </p>

        <p className="footer-item">
          GitHub:
          <a href="https://github.com/BrunoCocco" target="_blank">
            github.com/BrunoCocco
          </a>
        </p>

        <p className="footer-item">
          🟡 BTC Price: {btc ? `$${btc}` : "Cargando..."}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
