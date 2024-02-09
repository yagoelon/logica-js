alert("Boas vindas ao nosso site!");

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