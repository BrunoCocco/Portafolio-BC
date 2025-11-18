import useCryptoPrice from "../hooks/useBTCPrice";

function Footer() {
  const btc = useCryptoPrice("BTC");
  const xrp = useCryptoPrice("XRP");

  return (
    <footer className="footer-crypto">
      <div className="footer-inner">
        <h4 className="footer-title">Cotizaciones</h4>
        <p className="footer-item"> BTC: {btc ? `$${btc}` : "Cargando..."}</p>
        <p className="footer-item"> XRP: {xrp ? `$${xrp}` : "Cargando..."}</p>
      </div>
    </footer>
  );
}

export default Footer;
