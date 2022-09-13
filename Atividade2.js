const prompt = require ('prompt-sync')()

const n1Text = prompt ('Digite o valor de n1:');
const n2Text = prompt ('Digite o valor de n2:');
const n3Text = prompt ('Digite o valor de n3:');

const n1 = Number (n1Text);
const n2 = Number (n2Text);
const n3 = Number (n3Text);

if (n1<n2 && n1<n3 && n2<n3){
    console.log (`A sequência é:, ${n1},",",${n2},",",${n3}`);}

else if (n1<n2 && n1<n3 && n1<n3){
    console.log (`A sequência é:, ${n1},",",${n3},",",${n2}`);}

else if (n2<n1 && n2<n3 && n1<n3){
    console.log (`A sequência é:, ${n2},",",${n1},",",${n3}`);}

else if (n2<n1 && n2<n3 && n3<n1){
    console.log (`A sequência é:, ${n2},",",${n3},",",${n1}`);}

else if (n3<n1 && n3<n2 && n1<n2){
    console.log (`A sequência é:, ${n3},",",${n1},",",${n2}`);}

else if (n3<n1 && n3<n2 && n2<n1){
    console.log (`A sequência é:, ${n3},",",${n2},",",${n1}`);}






