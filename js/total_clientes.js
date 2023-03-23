

let clientes = document.querySelectorAll('.cliente')
let total_clientes = document.querySelector('.tclientes')

let qtd = 0
let qntd = 0


for (let i = 0; i <= clientes.length; i++) {

    let cliente = clientes[i];
    let totalclientes = cliente.querySelector('.info-n_pessoas');
    let total = Number(totalclientes.textContent);

    qtd = qtd + total 
    

    total_clientes.textContent = qtd
    

    

}

