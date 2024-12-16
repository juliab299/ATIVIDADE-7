let palavra = prompt("Digite uma palavra: ");
let revertida = "";
for (let i = palavra.length - 1; i >= 0; i--) {
    revertida += palavra[i];
}
console.log(revertida);
