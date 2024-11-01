let file = "https://6724b576c39fedae05b27067.mockapi.io/Animal";

function buscaAnimal(){
    fetch(file)
    .then(response => response.json())
    .then(myArray => {
        console.log(myArray);
        atualizaLista(myArray);
    });
}

function atualizaLista(listaAnimais) {
    let lista = document.querySelector('#lista'); //busco no meu html onde esta a minha lista
    let i = 0;

    lista.innerHTML = ''; //limpo os valores que estao na lista quando recarrego a pagina

    listaAnimais.forEach((animal, index) => {
        lista.innerHTML +=
            `<li id="${index}">${animal.id} - ${animal.nome} (${animal.idade}) - ${animal.raca} </li>`;
    });
}

function addToto() {
    fetch(file, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nome": 'Totô',
            "idade": 12 ,
            "raca": 'cachorro'
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            buscaAnimal();
        })
        .catch(err => {
            console.log(err);
        });
   
}