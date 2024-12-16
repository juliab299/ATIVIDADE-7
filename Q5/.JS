let numeros = [4, 10, 2, 5, 7, 1];
let maiorNumero = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}
console.log(maiorNumero);
