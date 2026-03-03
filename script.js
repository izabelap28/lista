// 1. Lista Inicial de Convidados
const convidadosOriginais = [
    "Ana Maria", "Bernardo", "Alice", "Gustavo", "Arthur", 
    "Fernanda", "Alberto", "Caio", "Beatriz", "Amélia"
];

// Variável que manterá o estado atual da lista exibida
let convidadosAtuais = [...convidadosOriginais];

const listaUl = document.getElementById('listaExibicao');
const statsDiv = document.getElementById('stats');

// Função para renderizar a lista na tela usando Loop
function renderizar(lista) {
    listaUl.innerHTML = "";
    
    lista.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaUl.appendChild(li);
    });

    atualizarEstatisticas(lista);
}

// Contagem de nomes com "A" e atualização de dados
function atualizarEstatisticas(lista) {
    // Conta quantos nomes começam com "A" (Case Insensitive)
    const totalComA = lista.filter(n => n.toUpperCase().startsWith('A')).length;
    
    statsDiv.innerHTML = `
        <strong>Info:</strong> Começam com 'A': ${totalComA} | 
        Total: ${lista.length}
    `;
}

// Funções do Menu
function transformar(tipo) {
    if (tipo === 'maiuscula') {
        convidadosAtuais = convidadosAtuais.map(n => n.toUpperCase());
    } else {
        convidadosAtuais = convidadosAtuais.map(n => n.toLowerCase());
    }
    renderizar(convidadosAtuais);
}

function ordenar() {
    convidadosAtuais.sort((a, b) => a.localeCompare(b));
    renderizar(convidadosAtuais);
}

function filtrarLongos() {
    // Cria lista com nomes que possuem mais de 5 letras
    convidadosAtuais = convidadosAtuais.filter(nome => nome.length > 5);
    renderizar(convidadosAtuais);
}

function resetar() {
    convidadosAtuais = [...convidadosOriginais];
    renderizar(convidadosAtuais);
}

// Inicialização
renderizar(convidadosAtuais);
