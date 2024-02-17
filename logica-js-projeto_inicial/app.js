alert("Boas vindas ao jogo!");
let numeroSecreto = parseInt(Math.random () * 100 + 1);
var tentativas = 1;
console.log(numeroSecreto);

while (chute != numeroSecreto) {
    var chute = prompt("Escolha um número entre 1 e 100");
    if (numeroSecreto == chute) {
        console.log("Acertou! O número secreto era: " + numeroSecreto); //método com aspas e +
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`Errou! O número secreto é menor que ${chute}`);
        } else {
            alert(`Errou! O número secreto é maior que ${chute}`);
        }
        /*alert("Errou! O número secreto era: " + numeroSecreto);
        console.log("Errou! O número secreto era: " + numeroSecreto);*/
        //tentativas = tentativas + 1;
        tentativas++;
    };
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
//    alert(`Acertou! O número secreto era ${numeroSecreto}, após efetuar ${tentativas} tentativas`); //método com crase, cifrao e chaves
//} else {
//    alert(`Acertou! O número secreto era ${numeroSecreto}, após efetuar ${tentativas} tentativa`); //método com crase, cifrao e chaves
//}