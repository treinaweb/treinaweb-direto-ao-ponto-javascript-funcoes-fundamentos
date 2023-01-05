function soma(valor1, valor2) { // parâmetro
    console.log('a soma é:', valor1 + valor2);
}

function subtracao(x, y) {
    console.log('a subtração é:', x - y);
}

function myFunction(value = '', numero = 0) {
    console.log(value, numero);
}

myFunction();

myFunction('novo valor');

myFunction('novo valor', 50);









