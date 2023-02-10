<p align="center">
    <img src="assets/logo_infnet.png" width="70" height="70" />
</p>

# Teste de Performance 1

## Exercício 10

Vamos a um desafio! Crie um programa que realize os seguintes passos:

1) Solicite um número com `prompt` e guarde o que foi digitado em uma variável `primeiroNumero`;
2) Solicite um segundo número via `prompt` e guarde o que foi digitado em uma variável `segundoNumero`;
3) Solicite qual operação matemática deve ser realizada entre esses números através de um prompt. Os valores válidos são `"adição"`, `"subtração"`, `"multiplicação"` e `"divisão"`. Caso algo diferente disso tenha sido digitado, o programa deve ser finalizado com um `alert` informando o erro;
4) Por fim, mostre em um `alert` o resultado da operação matemática realizada entre `primeiroNumero` e `segundoNumero`.

### Dicas
- Utilize `if` e `else` com o operador de igualdade para saber qual operação matemática foi escolhida via prompt. Exemplo:

```javascript
let operacao = prompt("Digite a operação matemática");
if (operacao === "adição") {
  let resultadoSoma = primeiroNumero + segundoNumero;
  alert(resultadoSoma);
} else if (operacao === "subtração") {
  let resultadoSubtracao = primeiroNumero - segundoNumero;
  alert(resultadoSubtracao);
} else {
  // Continuar código...
}
```

- É necessário converter os números digitados no `prompt` para o tipo `number`, ou as operações matemáticas não vão funcionar corretamente. Exemplo:

```javascript
let primeiroNumero = prompt("Digite o primeiro número:");
let primeiroNumeroConvertido = Number(primeiroNumero);
```