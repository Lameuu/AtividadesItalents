const tarefas = [];

const adicionarTarefa = () => {
    const entradaTarefa = document.getElementById('entradaTarefa');
    const tarefa = entradaTarefa.value.trim();

    if (tarefa) {
        tarefas.push(tarefa);
        entradaTarefa.value = '';
        renderizarTarefas();
    }
};

const removerTarefa = (indice) => {
    tarefas.splice(indice, 1);
    renderizarTarefas();
};

const renderizarTarefas = () => {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, indice) => {
        listaTarefas.innerHTML += `
            <li>
                ${tarefa}
                <button onclick="removerTarefa(${indice})">Remover</button>
            </li>
        `;
    });
};
