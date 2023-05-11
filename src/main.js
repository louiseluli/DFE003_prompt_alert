// Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.
let num1 = parseFloat(prompt("Qual o número que você quer calcular o dobro?"));
alert(num1 * 2);

// Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.
let valorJantar = parseFloat(prompt("Quanto custou o jantar?"));
let valorTaxa = parseFloat(
  prompt("Quanto foi a taxa de atendimento do garçom?")
);
alert(valorJantar + valorTaxa);

// Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.
let valorTotal = parseFloat(prompt("Qual o valor total da conta?"));
let numClientes = parseInt(prompt("Quantas pessoas dividirão a conta?"));
alert(valorTotal / numClientes);
