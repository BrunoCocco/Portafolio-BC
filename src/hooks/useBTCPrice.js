import { useEffect, useState } from "react";

function useBTCPrice() {
  const [precio, setPrecio] = useState(null);

  async function fetchPrecio() {
    try {
      const res = await fetch(
        "https://api.coinbase.com/v2/prices/BTC-USD/spot"
      );
      const data = await res.json();
      setPrecio(Number(data.data.amount).toLocaleString("en-US"));
    } catch (error) {
      console.error("❌ Error obteniendo BTC:", error);
    }
  }

  useEffect(() => {
    fetchPrecio();
    const intervalo = setInterval(fetchPrecio, 20000); // cada 20s
    return () => clearInterval(intervalo);
  }, []);

  return precio;
}
export default useBTCPrice;
