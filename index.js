"use strict";
let numero = 200;
let segundoNumero = 100;
console.log(numero + segundoNumero);
let idade = 16;
let texto = "Minha idade é: " + idade;
console.log(texto);
let idadeNova = 16;
let textoNovo = "Minha idade é:";
console.log(textoNovo + idadeNova);
let verdadeiro = true;
console.log(verdadeiro);
let arr = [1, 2, 3, 4, 10, 50, 60];
console.log(arr);
console.log("Tamanho do array:" + arr.length);
console.log("acessando a posição do array:" + arr[0]);
console.log(arr.indexOf(60));
let arrayTexto;
arrayTexto = ['ab', 'bc', 'cd', 'de',];
console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));
function exibirTexto() {
    console.log('Exibindo meu Texto');
}
exibirTexto();
function exibirOutroTexto() {
    return "Exibindo outro Texto";
}
console.log(exibirOutroTexto());
function retornaNumero() {
    return 10;
}
console.log(retornaNumero());
function retornarTexto() {
    return "retornando string";
}
console.log(retornarTexto());
function soma(a, b) {
    return a + b;
}
console.log("O valor da soma é" + soma(50, 100));
let numero1 = 200;
let numero2 = 100;
console.log(numero1 * numero2);
function formula(a, b, c) {
    return (a + b) * c;
}
console.log(formula(2, 3, 4));
function resultado(a, b) {
    return "O resultado da Multiplicação é:" + (a * b);
}
console.log(resultado(13, 13));
