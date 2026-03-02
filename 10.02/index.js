//questao 1
const cidade = "São Paulo";
let temperatura = 25.5;
const temDesconto = false;
console.log("Cidade:", cidade);
console.log("Temperatura:", temperatura);
console.log("Desconto:", temDesconto, "| Tipo:", typeof temDesconto);

//questao2
console.log(10 % 3);
console.log(2 * 3);
console.log(15 >= 15);
console.log(10 - 10);

//questao3
const usuario = "gabriel silva";
const saldo = 1500.4;
console.log(`O usuário ${usuario.toUpperCase()} possui R$ ${saldo.toFixed(2)}`);
console.log(usuario.includes("silva"));
const novoNome = usuario.replace("gabriel", "joão");
console.log(novoNome);
console.log(Math.ceil(saldo));
const valorTexto = "50.25";
const valorNumero = parseFloat(valorTexto);
console.log(valorNumero + 10);

//questao4
function somar(a, b) {
  return a + b;
}

console.log(somar(10, 5));

function saudar(nome) {
  return `Olá, ${nome}! Seja bem-vindo.`;
}

console.log(saudar("Carlos"));

function calcularMedia(n1, n2, n3) {
  const soma = n1 + n2 + n3;
  return soma / 3;
}

console.log(calcularMedia(7, 8, 9)); // Saída: 8
