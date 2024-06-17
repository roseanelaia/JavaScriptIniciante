//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!")


//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = 2;
let numberTwo = 3;

let soma = numberOne + numberTwo;

alert(`${numberOne} + ${numberTwo} é igual a: ${soma}`);


//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".


let x = 5;

if (typeof x == 'number') {
    alert(`${x}, é um número`)
} else {
    alert (`${x}, não é um número`)
}


//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

 let y = 'Bala';

if (typeof y == 'number') {
    alert(`${y}, não é uma string`)
} else {
    alert (`${y}, é uma string`)
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let z = true;

if (typeof z == 'boolean') {
    alert(`${z}, é um booleano`)
} else {
    alert (`${z}, não é um booleano`)
}

// 6.Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas

let a = 10;
let b = 6;

let subtracao = a - b;

alert(`O resultado da subtração de ${a} - ${b} é: ${subtracao}`);



// 7.Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let c = 10;
let d = 6;

let multiplicacao = c * d;

alert(`O resultado da multiplição de ${c} x ${d} é: ${multiplicacao}`);


// 8.Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let e = 12;
let f = 6;

let divisao = e / f;

alert(`O resultado da divisão de ${e} / ${f} é: ${divisao}`);


// 9.Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let par = 4;

if (par % 2 == 0) {
    alert(`${par} é um número par.`)
} else {
    alert(`${par} não é um número par`)
}


// 10.Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let impar = 5;

if (impar % 2 == 0) {
    alert(`${impar} não é um número impar.`)
} else {
    alert(`${impar} é um número impar.`)
}


