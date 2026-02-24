import React, { useState, useEffect } from 'react';

function CalculadoraSoma() {
  // 1. Definindo os estados para os inputs e o resultado
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  // 2. Função de soma
  const calcularSoma = () => {
    const somaTotal = Number(num1) + Number(num2);
    setResultado(somaTotal);
   
    // Debug manual no console
    console.log(`Debug: Somando ${num1} + ${num2} = ${somaTotal}`);
  };

  // 3. Debug com useEffect (Melhor prática para monitorar mudanças)
  useEffect(() => {
    console.table({ num1, num2, resultado });
  }, [num1, num2, resultado]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Somador Simples</h2>
     
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
     
      <span style={{ margin: '0 10px' }}>+</span>
     
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />

      <button onClick={calcularSoma} style={{ marginLeft: '10px' }}>
        Somar
      </button>

      <hr />
      <h3>Resultado: {resultado}</h3>
    </div>
  );
}

export default CalculadoraSoma;
