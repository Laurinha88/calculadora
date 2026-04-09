// Quando digitar o CEP
document.getElementById("cep").addEventListener("blur", buscarCEP);

// Buscar endereço na API
function buscarCEP() {
    let cep = document.getElementById("cep").value;

    if (cep.length !== 8) return;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(dados => {
            if (dados.erro) return;

            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("estado").value = dados.uf;
        });
}

// Salvar no localStorage
function salvar() {
    let dados = {
        nome: document.getElementById("nome").value,
        cep: document.getElementById("cep").value,
        rua: document.getElementById("rua").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value
    };

    localStorage.setItem("cadastro", JSON.stringify(dados));
    alert("Dados salvos!");
}

// Restaurar dados ao carregar
window.onload = function () {
    let dados = JSON.parse(localStorage.getItem("cadastro"));

    if (dados) {
        document.getElementById("nome").value = dados.nome;
        document.getElementById("cep").value = dados.cep;
        document.getElementById("rua").value = dados.rua;
        document.getElementById("cidade").value = dados.cidade;
        document.getElementById("estado").value = dados.estado;
    }
};