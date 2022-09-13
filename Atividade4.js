const prompt = require ('prompt-sync')()

const NumeroText = prompt ('Digite um numero:');
const N = Number (NumeroText);

const par = Math.sqrt(N,2);
const impar = Math.pow(N,2);

if (N % 2==0){
    console.log (`Número será par e sua raiz é: ${par}`);
}
else{
    console.log (`Número será impar e seu número elevado ao quadrado é: ${impar}`);
}