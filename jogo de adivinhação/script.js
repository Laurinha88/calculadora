let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let maxTentativas = 10;
let tentativas = 0;

document.getElementById("tentativas").innerText =
"Tentativas restantes: " + (maxTentativas - tentativas);


function chutar() {

    let input = document.getElementById("palpite").value;
    let palpite = parseInt(input);

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById("mensagem").innerText =
        "Digite um número válido entre 1 e 100!";
        return;
    }

    tentativas++;

    if (palpite === numeroSecreto) {
        document.getElementById("mensagem").innerText =
        "Você acertou!";
        return;
    }

    if (palpite < numeroSecreto) {
        document.getElementById("mensagem").innerText =
        "O número secreto é maior";
    } else {
        document.getElementById("mensagem").innerText =
        "O número secreto é menor";
    }

    let restantes = maxTentativas - tentativas;

    document.getElementById("tentativas").innerText =
    "Tentativas restantes: " + restantes;

    if (tentativas >= maxTentativas) {
        document.getElementById("mensagem").innerText =
        "Você perdeu! O número era " + numeroSecreto;
    }

}