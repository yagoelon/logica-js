//alert("Boas vindas ao jogo!");
let numeroSecreto = 5;
let chute = prompt("Escolha um número entre 1 e 30");
console.log(numeroSecreto);


if (numeroSecreto == chute) {
    alert(`Acertou! O número secreto era ${numeroSecreto}`); //método com crase, cifrao e chaves
    console.log("Acertou! O número secreto era: " + numeroSecreto); //método com aspas e +
} else {
    alert("Errou! O número secreto era: " + numeroSecreto);
    console.log("Errou! O número secreto era: " + numeroSecreto);
};