import { buscarPersonagens } from "./api.js";
import { renderizarPersonagens, mostrarMensagem } from "./util.js";

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');

async function carregarPersonagens(nome = ''){

    try {
        mostrarMensagem('carregando personagens...');
        const data = await buscarPersonagens(nome);
        renderizarPersonagens(data.results);
    }catch (error) {
        mostrarMensagem('nenhum personagem encontrado.');
    };

};

form.addEventListener('submit', async function(event){
    event.preventDefault();
    const nomeDigtado = input.value;

    await carregarPersonagens(nomeDigtado);

});

 carregarPersonagens();

async function iniciarApp() {
    const personagens = await buscarPersonagens();
    renderizarPersonagens(personagens.results);
    console.log(personagens)
}

iniciarApp();
