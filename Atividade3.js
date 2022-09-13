const prompt = require ('prompt-sync')()

const IdadeText = prompt ('Digite a sua idade:');

const iD = Number (IdadeText);

if (iD>=10 && iD<=14){
        console.log ('Idade ifantil.');
}
else if (iD>=15 && iD<=17){
        console.log ('Idade Juvenil.');
}
else if (iD>=18 && iD<=25){
        console.log ('Idade Adulta.');
}
else {
    console.log ('Opção inválida!!');
}

