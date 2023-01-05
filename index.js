// ESCOPO GLOBAL
let nome = 'Ariel';

function addNome() {
    // ESCOPO LOCAL OU ESCOPO DA FUNÇÃO addNome
    nome = 'Carlos';
    console.log(nome);

    function novoNome() {
        // ESCOPO DA FUNÇÃO novoNome
        nome = 'Daniel';
        console.log(nome);
    }
    novoNome();
}

addNome();

console.log(nome);






