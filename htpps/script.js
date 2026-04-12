const API = "https://crudcrud.com/api/144cde22425045e5be98886af580d177";

// LISTAR CLIENTES
function listar() {
    fetch(API)
        .then(res => res.json())
        .then(dados => {
            let lista = document.getElementById("lista");
            lista.innerHTML = "";

            dados.forEach(cliente => {
                let item = document.createElement("li");

                item.innerHTML = `
                    ${cliente.nome} - ${cliente.email}
                    <button onclick="excluir('${cliente._id}')">Excluir</button>
                `;

                lista.appendChild(item);
            });
        });
}

// CADASTRAR
function cadastrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, email })
    })
    .then(() => {
        listar();
    });
}

// EXCLUIR
function excluir(id) {
    fetch(`${API}/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        listar();
    });
}

// CARREGAR AO ABRIR
window.onload = listar;