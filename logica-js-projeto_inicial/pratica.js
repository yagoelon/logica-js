/*alert("Boas vindas ao nosso site!");

//var nome = "Lua";
//var idade = 25;
var numeroDeVendas = 50;
var saldoDisponivel = 1000;
var mensagemDeErro = "Erro! Preencha todos os campos";

alert(mensagemDeErro);

let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual sua idade?");

if (idade >= 18) {
    alert("Pode tirar a habilitação!");
    console.log("Pode tirar a habilitação!")
} else {
    alert("NÃO pode tirar a habilitação!");
    console.log("NÃO pode tirar a habilitação!")
};
*/

/*
//1
var diaSemana = prompt("Qual o dia da semana hoje?");

if (diaSemana == "Sábado" || diaSemana == "Domingo") {
    alert("Bom final de semana!");
} else if (diaSemana == "Segunda" || diaSemana == "Terça" || diaSemana == "Quarta" || diaSemana == "Quinta" || diaSemana == "Sexta") {
    alert("Boa semana!");
} else {
    alert("NOME DA SEMANA INVÁLIDO, TENTE NOVAMENTE");
};
//2
var numero = prompt("Digite um número:");

if (numero >= 0) {
    alert("O número digitado é positivo");
} else {
    alert("O número digitado é negativo");
};
//3
var numeroJogo = prompt("Digite sua pontuação:");

if (numeroJogo >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
};
//4
var saldo = prompt("Digite seu saldo atual");
alert(`Seu saldo da conta é R$${saldo}`);
//5
var nomeUser = prompt("Digite seu nome:");
alert(`Boas-vindas ${nomeUser}`);
*/

/*let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = 0;

while(contador != qtdNumeros){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador ++
}

let media = soma / qtdNumeros;

console.log(media);*/

/*contador=0

while(contador < 10){
    contador++
    alert(contador);
};

contador=11

while(contador > 0){
    contador--
    alert(contador);
};

contador=prompt("Digite um número:")

while(contador > 0){
    contador--
    console.log(contador);
};

contador=0
numero=prompt("Digite um número:")
while(contador < numero){
    contador++
    console.log(contador);
};*/

//1
console.log ("Boas-vindas")
//2
var nome = "Yago Elon";
console.log(`Olá ${nome}`);
//3
alert (`Olá ${nome}`);
//4
var linguagemProg = prompt ("Qual a linguagem de programação que você mais gosta?")

console.log(linguagemProg);
//5
//var valor1 = 1;
//var valor2 = 5;
//var resultado = (valor1 + valor2);
//
//console.log (`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)
//6
var valor1 = 1;
var valor2 = 5;
var resultado = (valor1 - valor2);

console.log (`A subtração de ${valor1} e ${valor2} é igual a ${resultado}.`)
//7
var idadeUser = prompt ("Digite a sua idade:");

if (idadeUser>=18){
    console.log ("Você é maior de idade!!");
} else {
    console.log ("Você é menor de idade :(");
}
//8