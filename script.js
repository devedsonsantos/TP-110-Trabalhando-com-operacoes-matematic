let primeiroNumero = prompt("Digite um número:");
let segundoNumero = prompt("Digite outro número:");
let operacao = prompt("Qual operação deseja realizar? (adição, subtração, multiplicação ou divisão)");

primeiroNumero = parseFloat(primeiroNumero);
segundoNumero = parseFloat(segundoNumero);

if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
  alert("Um dos valores digitados não é um número válido.");
} else {
  if (operacao === "adição") {
    alert("Resultado: " + (primeiroNumero + segundoNumero));
  } else if (operacao === "subtração") {
    alert("Resultado: " + (primeiroNumero - segundoNumero));
  } else if (operacao === "multiplicação") {
    alert("Resultado: " + (primeiroNumero * segundoNumero));
  } else if (operacao === "divisão") {
    alert("Resultado: " + (primeiroNumero / segundoNumero));
  } else {
    alert("Operação inválida.");
  }
}
