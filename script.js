let convidados = ["Ana", "Carlos", "Amanda", "Bruno", "Aline", "Fernanda", "Rafael", "Alex"];

function mostrarMaiusculos() {
    let resultado = "";

    for (let i = 0; i < convidados.length; i++) {
        resultado += convidados[i].toUpperCase() + "<br>";
    }

    document.getElementById("resultado").innerHTML = 
        "<strong>Nomes em Maiúsculo:</strong><br>" + resultado;
}

function contarLetraA() {
    let contador = 0;

    for (let i = 0; i < convidados.length; i++) {
        if (convidados[i].startsWith("A")) {
            contador++;
        }
    }

    document.getElementById("resultado").innerHTML = 
        "<strong>Quantidade que começam com A:</strong> " + contador;
}

function nomesLongos() {
    let lista = [];

    for (let i = 0; i < convidados.length; i++) {
        if (convidados[i].length > 5) {
            lista.push(convidados[i]);
        }
    }

    document.getElementById("resultado").innerHTML = 
        "<strong>Nomes com mais de 5 letras:</strong><br>" + lista.join("<br>");
}
