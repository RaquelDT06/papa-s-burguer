let botaoAdicionar = document.querySelector('#reservar')

botaoAdicionar.addEventListener('click', function (evento){
    
    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let cliente = obtemClienteDoForm(form)

    let erros = validaCliente(cliente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }
    
    adicionaClienteNaTabela(cliente)

    form.reset()
})

function obtemClienteDoForm(form){
    let cliente = {
        nome: form.nome.value,
        data: form.data.value,
        hora: form.hora.value,
        n_pessoas: form.n_pessoas.value,
        
    }
    return cliente
}
function adicionaClienteNaTabela(cliente){
    let clientetr = montarTr(cliente)
    let tabela = document.querySelector('#tabela-clientes')
    tabela.appendChild(clientetr)
    }

function montarTr(cliente){

    let ClienteTr = document.createElement('tr')
    ClienteTr.classList.add('cliente')

    ClienteTr.appendChild(montarTd(cliente.nome,"info-nome"))
    ClienteTr.appendChild(montarTd(cliente.data,"info-data"))
    ClienteTr.appendChild(montarTd(cliente.hora,"info-horario"))
    ClienteTr.appendChild(montarTd(cliente.n_pessoas,"info-n_pessoas"))
    

    return ClienteTr

}

function montarTd(dado, classe){

    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td 
}

function validaCliente(cliente) {

    let erros = [];

    if (cliente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (cliente.data.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (cliente.hora.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (cliente.n_pessoas.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    return erros;
}