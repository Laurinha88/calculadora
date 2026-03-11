function calcularIMC(){

    //Entrada de dados
    let Altura = document.getElementById("Altura").value;
    let Peso = document.getElementById("Peso").value;

    //Processamento
    let imc = Peso / (Altura * Altura);
    document.getElementById("resultado").innerText = "Seu IMC é:" + imc.toFixed(2);
    let classificação = "";
    if (imc < 25){
        classificação = "abaixo do peso";
    }
    else if (imc < 50){
        classificação = "Peso Normal"
    }
    else if(imc < 80){
        classificação = "SobrePeso"
    }
    else {
        classificação = "Obesidade"
    }

    //Saída
    document.getElementById("classificação")

}
