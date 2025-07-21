import Tarefa from './tarefa.js'

const inputAdd = document.querySelector('#inputAdd')
const btnAdd = document.querySelector('.btnAdd')

btnAdd.addEventListener('click', ()=>{
    if(inputAdd.value.length > 0){
        let tarefa = new Tarefa
        tarefa.novaTarefa(inputAdd.value)
    }
})