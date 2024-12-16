let numeros = [];
while (true) {
    let numero = parseInt(prompt("Digite um número (digite 0 para parar): "));
    if (numero === 0) {
        break;
    }
    numeros.push(numero);
}
console.log(numeros);
