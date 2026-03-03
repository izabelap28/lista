document.addEventListener("DOMContentLoaded", () => {

  let convidados = ["Ana","Carlos","Amanda","Bruno","Aline","Fernanda","Rafael","Alex"];

  const lista = document.getElementById("lista");
  const totalCard = document.getElementById("totalCard");
  const aCard = document.getElementById("aCard");
  const longosCard = document.getElementById("longosCard");

  function atualizarTela(){
    lista.innerHTML = "";

    convidados.forEach(nome => {
      let li = document.createElement("li");
      li.textContent = nome;
      lista.appendChild(li);
    });

    totalCard.textContent = convidados.length;
    aCard.textContent = convidados.filter(n => n[0].toUpperCase() === "A").length;
    longosCard.textContent = convidados.filter(n => n.length > 5).length;
  }

  document.getElementById("btnMaiusculo").addEventListener("click", () => {
    convidados = convidados.map(n => n.toUpperCase());
    atualizarTela();
  });

  document.getElementById("btnOrdenar").addEventListener("click", () => {
    convidados.sort();
    atualizarTela();
  });

  document.getElementById("btnInverter").addEventListener("click", () => {
    convidados.reverse();
    atualizarTela();
  });

  atualizarTela();

});
