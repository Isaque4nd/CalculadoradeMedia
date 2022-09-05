// receber nome do aluno
var nome = prompt("digite seu nome");

//receber notas
var notaDaPrimeiraUnidade = prompt("digite a primeira nota");
var notaDaSegundaUnidade = prompt("digite a segunda nota");
var notaDaTerceiraUnidade = prompt("digite a terceira nota");

//somar todas as notas
var somaFinal = parseFloat(notaDaPrimeiraUnidade) + parseFloat(notaDaSegundaUnidade) + parseFloat(notaDaTerceiraUnidade);

//obter a média do aluno
var media = parseFloat(somaFinal) / 3;

//mostrar apenas uma casa decimal
var mediaFixada = media.toFixed(1);

// dizer nome do aluno
document.writeln("Bem vindo " + nome + ",");

// apresentar a média dele
document.writeln("Sua média é: " + mediaFixada + ".");

//mostrar se o aluno está aprovado ou reprovado
if (mediaFixada >= 6) document.writeln("Você foi aprovado!");
else document.writeln("Você foi reprovado!");


