const pegandoBotao = () => {
    const addBtn = document.querySelector('#add-btn'); //Pegou o elemento do botao
    addBtn.addEventListener('click', e=> {     //Adicionou um escutador no botao, sempre que for clicado
        selectTask();
        limparInput();
        previnirEvento();
    });
}

//Função selecionar Tarefa
const selectTask = () =>{
    const selectTaskHtml = document.querySelector('#task-title').value; //Selecionou o elemento já retornando o valor dentro dele
    if(selectTaskHtml){
        const template = document.querySelector('.template');
         //clonar Template
        const newTask = template.cloneNode(true); //cloneNode é para clonar um elemento
        newTask.querySelector('.task-title').textContent = selectTaskHtml; // textContent é para pegar o valor dentro do elemento
        newTask.classList.remove('template'); //classList.remove('class') para remover uma classe no elemento do html
        newTask.classList.remove('hide'); //classList.remove('class') para remover uma classe no elemento do html

        //seleciona lista
        const list = document.querySelector('#task-list');
        //add lista clonada
        list.appendChild(newTask);
        
        //add evento de remover
        const pegarEventoBotaoRemover = newTask.querySelector('.remove-btn').addEventListener('click', (e) =>{
            const element = e.target;
            removerTask(element)
        })

        //add o addEventListening para pegar o evento do botao
        const pegarEventoBotaoPressionado = newTask.querySelector('.done-btn').addEventListener('click', (e) => {
            const element = e.target;
            pressButtonConfirm(element)
        } )
    } 
}

const pressButtonConfirm = (element) => {
    const button = element.parentNode;
    button.classList = 'done'
}
//função de remover tarefa (ul)
const removerTask = (element) => {
    element.parentNode.remove(true);
}

//função para limpar input assim que for enviado
const limparInput = () => {
    previnirEvento()
    const selectTaskHtml = document.querySelector('#task-title').value = '';
}

//função para não disparar evento para o servidor 
const previnirEvento = () => {
    event.preventDefault()
}

// função para gerar um erro
const gerandoErro = () => {
    event.preventDefault()
    throw new Error('xxxxxxxx Erro xxxxxxxxxxxxxx')
}
pegandoBotao()

