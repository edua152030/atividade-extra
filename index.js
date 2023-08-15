
const taskList = [];

while (true) {
    const opcao = Number(prompt(`
        Cadastro de tarefas
        1 - Para incluir uma tarefa
        2 - Para listar tarefas
        3 - Atualizar status da tarefa
        4 - Atualizar tarefa
        5 - Excluir tarefa
        6 - Sair
    `));

    if (opcao === 1) {
        createTask();
    }else if (opcao === 2) {
        listTasks()
    }else if (opcao === 3) {
        updateTaskStatus()
    }else if (opcao === 4) {
        updateTask()
    }else if (opcao === 5) {
        deleteTask()
    }else if (opcao === 6) {
        console.log("Saindo do programa.");
        break;
    }
}

function createTask() {
    const newTask = {
        title: prompt('digite o titulo da sua tarefa'),
        description: prompt('digite a descricao da sua tarefa'),
        status: false
    };
    taskList.push(newTask);
}

function listTasks(){
    console.log('lista de tarefa')
    taskList.forEach((valor, id) => {
        console.log(`Índice ${id} , Titulo: ${valor.title} , Descricao: ${valor.description} , Status: ${valor.status ? "Concluída" : "Pendente"}`);
        console.log("----");
        
    });
}

function updateTaskStatus(index, completed){
    const filtrado = Number(prompt('Digite o índice para alterar o status'));
    
    taskList.forEach((task, id) => {
       
        if (id === filtrado) {
            task.status = !task.status; 
            console.log("Status da tarefa atualizado.");
        }
    });
}

function updateTask() {
    const filtrado = Number(prompt('Digite o índice para alterar o status'))
    
    const filt = taskList.findIndex((valor, i) => i === filtrado)
    let newDescription2 = prompt('Digite sua nova descricao')
    taskList[filt].description = newDescription2
}

function deleteTask(index){
    const filtrado = Number(prompt('Digite o índice para alterar o status'));
    const filt = taskList.findIndex( (valor, i) => i === filtrado)
    taskList.splice(filtrado, 1)
    }    