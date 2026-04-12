import { Cliente } from "./classes.js";
import { criarItem } from "./utils.js";

const API = "https://crudcrud.com/api/SEU_ID/clientes";

const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const lista = document.getElementById("lista");
const btn = document.getElementById("btnCadastrar");

// LISTAR
async function listar() {
    const res = await fetch(API);
    const dados = await res.json();

    lista.innerHTML = "";

    dados.map(c => new Cliente(c.nome, c.email, c._id))
         .forEach(cliente => {
            const item = criarItem(cliente, excluir);
            lista.appendChild(item);
         });
}

// CADASTRAR
async function cadastrar() {
    const cliente = new Cliente(nomeInput.value, emailInput.value);

    if (!cliente.nome || !cliente.email) {
        alert("Preencha os campos!");
        return;
    }

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    });

    nomeInput.value = "";
    emailInput.value = "";

    listar();
}

// EXCLUIR
async function excluir(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    listar();
}

// EVENTO
btn.addEventListener("click", cadastrar);

// INICIAR
listar();