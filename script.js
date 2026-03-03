function processarLista() {

    let convidados = ["Ana", "Carlos", "Amanda", "Bruno", "Aline", "Fernanda", "Rafael", "Alex"];

    let nomesMaiusculos = "";
    let contadorA = 0;
    let maisDeCinco = [];

    for (let i = 0; i < convidados.length; i++) {

        nomesMaiusculos += convidados[i].toUpperCase() + "<br>";

        if (convidados[i].startsWith("A")) {
            contadorA++;
        }

        if (convidados[i].length > 5) {
            maisDeCinco.push(convidados[i]);
        }
    }

    document.getElementById("resultado").innerHTML =
        "<strong>Nomes em Maiúsculo:</strong><br>" + nomesMaiusculos +
        "<br><strong>Quantidade que começam com A:</strong> " + contadorA +
        "<br><br><strong>Nomes com mais de 5 letras:</strong><br>" + maisDeCinco.join("<br>");
}
