// scripts funcionais — não depende de elementos inline
document.addEventListener('DOMContentLoaded', () => {
  const convidados = ["Ana","Carlos","Amanda","Bruno","Aline","Fernanda","Rafael","Alex"];
  const resultado = document.getElementById('resultado');

  document.getElementById('btnMaiusculo').addEventListener('click', () => {
    const linhas = convidados.map(n => n.toUpperCase()).join('<br>');
    resultado.innerHTML = `<strong>Nomes em MAIÚSCULO:</strong><br>${linhas}`;
  });

  document.getElementById('btnA').addEventListener('click', () => {
    // conta A ou a (case-insensitive) no começo do nome
    const contador = convidados.reduce((acc, nome) => {
      return acc + (nome.trim().charAt(0).toUpperCase() === 'A' ? 1 : 0);
    }, 0);
    resultado.textContent = `Quantidade que começam com "A": ${contador}`;
  });

  document.getElementById('btnLongos').addEventListener('click', () => {
    const lista = convidados.filter(n => n.length > 5);
    if (lista.length === 0) {
      resultado.textContent = 'Nenhum nome com mais de 5 letras.';
      return;
    }
    resultado.innerHTML = `<strong>Nomes com mais de 5 letras:</strong><br>${lista.join('<br>')}`;
  });
});
