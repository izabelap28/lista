document.addEventListener("DOMContentLoaded", () => {

  let convidados = ["Ana","Carlos","Amanda","Bruno","Aline","Fernanda","Rafael","Alex"];
  const resultado = document.getElementById("resultado");
  const input = document.getElementById("novoNome");

  function atualizarLista() {
    resultado.innerHTML = "<strong>Lista Atual:</strong><br>" + convidados.join("<br>");
  }

  document.getElementById("btnAdicionar").addEventListener("click", () => {
    let nome = input.value.trim();
    if(nome !== ""){
      convidados.push(nome);
      atualizarLista();
      input.value = "";
    }
  });

  document.getElementById("btnRemover").addEventListener("click", () => {
    let nome = input.value.trim();
    convidados = convidados.filter(n => n.toLowerCase() !== nome.toLowerCase());
    atualizarLista();
    input.value = "";
  });

  document.getElementById("btnMaiusculo").addEventListener("click", () => {
    resultado.innerHTML = convidados.map(n => n.toUpperCase()).join("<br>");
  });

  document.getElementById("btnA").addEventListener("click", () => {
    let contador = convidados.filter(n => n[0].toUpperCase() === "A").length;
    resultado.textContent = "Quantidade com A: " + contador;
  });

  document.getElementById("btnLongos").addEventListener("click", () => {
    let lista = convidados.filter(n => n.length > 5);
    resultado.innerHTML = lista.join("<br>");
  });

  document.getElementById("btnOrdenar").addEventListener("click", () => {
    convidados.sort();
    atualizarLista();
  });

  document.getElementById("btnTotal").addEventListener("click", () => {
    resultado.textContent = "Total de convidados: " + convidados.length;
  });

  document.getElementById("btnLimpar").addEventListener("click", () => {
    resultado.innerHTML = "";
  });

});
