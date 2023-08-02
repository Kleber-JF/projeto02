const form = document.getElementById('form-cadastro');
const corpoTabela = document.querySelector('tbody');
const nomes = [];
const telefones = [];
let write = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaCadastro();

    inputNomeCadastro.value = '';
    inputTelCadastro.value = '';

});

function adicionaCadastro() {
    const inputNomeCadastro = document.getElementById('nome-cadastro');
    const inputTelCadastro = document.getElementById('tel-cadastro');

    if(nomes.includes(inputNomeCadastro.value) || telefones.includes(inputTelCadastro.value)) {
        alert (`O nome ou o telefone já foi cadastrado`);
    } else {
    nomes.push(inputNomeCadastro.value);
    telefones.push(inputTelCadastro.value);   
    let linha = `<tr><td>${inputNomeCadastro.value}</td><td>${inputTelCadastro.value}</td></tr>`;
    write += linha;
    corpoTabela.innerHTML = write;
}};

