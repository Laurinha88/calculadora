function calcular() {

    let valor = parseFloat(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(valor) || valor < 1) {
        resultado.innerText = "Valor insuficiente";
        return;
    }

    let tempo = 0;
    let troco = 0;

    if (valor >= 3.00) {
        tempo = 120;
        troco = valor - 3.00;
    } else if (valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75;
    } else if (valor >= 1.00) {
        tempo = 30;
        troco = valor - 1.00;
    }

    resultado.innerText =
        "Tempo: " + tempo + " minutos | Troco: R$ " + troco.toFixed(2);
}