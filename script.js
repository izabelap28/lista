document.addEventListener("DOMContentLoaded", () => {

  let convidados = ["Ana","Carlos","Amanda","Bruno","Aline","Fernanda","Rafael","Alex"];
  const resultado = document.getElementById("resultado");

  document.getElementById("btnMaiusculo").addEventListener("click", () => {
    resultado.innerHTML = convidados.map(n => n.toUpperCase()).join("<br>");
  });

  document.getElementById("btnA").addEventListener("click", () => {
    let total = convidados.filter(n => n[0].toUpperCase() === "A").length;
    resultado.textContent = "Quantidade com A: " + total;
  });

  document.getElementById("btnLongos").addEventListener("click", () => {
    let lista = convidados.filter(n => n.length > 5);
    resultado.innerHTML = lista.join("<br>");
  });

  document.getElementById("btnOrdenar").addEventListener("click", () => {
    convidados.sort();
    resultado.innerHTML = convidados.join("<br>");
  });

  document.getElementById("btnTotal").addEventListener("click", () => {
    resultado.textContent = "Total de convidados: " + convidados.length;
  });

  document.getElementById("btnInverter").addEventListener("click", () => {
    convidados.reverse();
    resultado.innerHTML = convidados.join("<br>");
  });

});
