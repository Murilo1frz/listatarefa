let tarefas = [];
let filtroAtual = 'todas';

function adicionarTarefa() {
  const input = document.getElementById('novaTarefa');
  const texto = input.value.trim();

  if (texto !== "") {
    tarefas.push({ texto: texto, concluida: false });
    input.value = "";
    renderizarTarefas();
  }
}

function alternarStatus(index) {
  tarefas[index].concluida = !tarefas[index].concluida;
  renderizarTarefas();
}

function filtrarTarefas(filtro) {
  filtroAtual = filtro;
  renderizarTarefas();
}

function renderizarTarefas() {
  const lista = document.getElementById('lista-tarefas');
  lista.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const deveMostrar =
      filtroAtual === 'todas' ||
      (filtroAtual === 'concluidas' && tarefa.concluida) ||
      (filtroAtual === 'pendentes' && !tarefa.concluida);

    if (deveMostrar) {
      const li = document.createElement('li');
      li.className = `tarefa ${tarefa.concluida ? 'concluida' : ''}`;
      li.innerHTML = `
        <span>${tarefa.texto}</span>
        <input type="checkbox" ${tarefa.concluida ? 'checked' : ''} onchange="alternarStatus(${index})">
      `;
      lista.appendChild(li);
    }
  });
}

renderizarTarefas();
