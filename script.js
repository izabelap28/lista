document.addEventListener("DOMContentLoaded", function () {

    let convidados = ["Ana", "Carlos", "Amanda", "Bruno", "Aline", "Fernanda", "Rafael", "Alex"];

    let resultado = document.getElementById("resultado");

    document.getElementById("btnMaiusculo").addEventListener("click", function () {
        let texto = "";
        for (let i = 0; i < convidados.length; i++) {
            texto += convidados[i].toUpperCase() + "<br>";
        }
        resultado.innerHTML = "<strong>Nomes em Maiúsculo:</strong><br>" + texto;
    });

    document.getElementById("btnA").addEventListener("click", function () {
        let contador = 0;
        for (let i = 0; i < convidados.length; i++) {
            if (convidados[i].startsWith("A")) {
                contador++;
            }
        }
        resultado.innerHTML = "<strong>Quantidade que começam com A:</strong> " + contador;
    });

    document.getElementById("btnLongos").addEventListener("click", function () {
        let lista = [];
        for (let i = 0; i < convidados.length; i++) {
            if (convidados[i].length > 5) {
                lista.push(convidados[i]);
            }
        }
        resultado.innerHTML = "<strong>Nomes com mais de 5 letras:</strong><br>" + lista.join("<br>");
    });

});
