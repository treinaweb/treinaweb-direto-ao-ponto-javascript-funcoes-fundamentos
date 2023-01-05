function soma(valor1, valor2) {
    console.log('executou:', valor1, valor2);
    let resultado = valor1 + valor2;
    return resultado;
}

let myFunction1 = soma;

let myFunction2 = soma;

let resultado1 = myFunction1(150, 50);
let resultado2 = myFunction2(30, 15);

console.log('resultado', resultado1, resultado2);








