import { useState } from "react";

export default function App() {
  const [price, setPrice] = useState<string>("10");
  const [qty, setQty] = useState<number>(2);

  function calcTotal() {
    debugger; 
    const total = Number(price) + qty; 
    return total;
  }

  console.log("Renderizando componente App", { price, qty });

  return (
    <div style={{ padding: 24 }}>
      <h1>Debug no React + Vite + TS</h1>

      <p>Preço (string): {price}</p>
      <p>Quantidade (number): {qty}</p>

      <button onClick={() => console.log("Total:", calcTotal())}>
        Calcular total
      </button>
    </div>
  );
}
