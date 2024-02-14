alert("Boas vindas ao jogo!");
let numeroSecreto = 5;
var tentativas = 1;
console.log(numeroSecreto);

while (chute != numeroSecreto) {
    var chute = prompt("Escolha um número entre 1 e 30");
    if (numeroSecreto == chute) {
        alert(`Acertou! O número secreto era ${numeroSecreto}, após efetuar ${tentativas} tentativas`); //método com crase, cifrao e chaves
        console.log("Acertou! O número secreto era: " + numeroSecreto); //método com aspas e +
    } else {
        if (chute > numeroSecreto) {
            alert(`Errou! O número secreto é menor que ${chute}`);
        } else {
            alert(`Errou! O número secreto é maior que ${chute}`);
        }
        /*alert("Errou! O número secreto era: " + numeroSecreto);
        console.log("Errou! O número secreto era: " + numeroSecreto);*/
        //tentativas = tentativas + 1;
        tentativas ++;
    };
}