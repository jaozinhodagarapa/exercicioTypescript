let numero: number = 200;
let segundoNumero: number = 100;

console.log(numero+segundoNumero);

let idade: number = 16;
let texto: string = "Minha idade é: " + idade ;

console.log(texto);

let idadeNova: number = 16;
let textoNovo: string = "Minha idade é:"

console.log(textoNovo + idadeNova);

let verdadeiro: boolean = true;

console.log(verdadeiro);

let arr: number[] = [1,2,3,4,10,50,60];

console.log(arr);
console.log("Tamanho do array:" + arr.length);
console.log("acessando a posição do array:" + arr[0]);
console.log(arr.indexOf(60));

let arrayTexto: Array<string>;

arrayTexto = ['ab','bc','cd','de',];
console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));

function exibirTexto(){
    console.log('Exibindo meu Texto');
}

exibirTexto();

function exibirOutroTexto(){
    return "Exibindo outro Texto";
}

console.log(exibirOutroTexto());

function retornaNumero(){
    return 10;
}

console.log(retornaNumero());

function retornarTexto(): string{
    return "retornando string";
}

console.log(retornarTexto());

function soma(a: number, b:number): number{
    return a + b;
}

console.log("O valor da soma é" + soma (50, 100));

let numero1: number = 200;
let numero2: number = 100;


console.log(numero1*numero2);

function formula (a: number, b:number, c:number):number{
    return (a+b)*c;
}
console.log(formula(2,3,4))
function resultado(a: number, b: number): string{
    return "O resultado da Multiplicação é:" + (a*b)
}

console.log(resultado(13,13));




