import Tarefa from './tarefa.js'
import Database from './database.js'

const inputAdd = document.querySelector('#inputAdd')
const btnAdd = document.querySelector('.btnAdd')
const database = new Database('tarefas')

btnAdd.addEventListener('click', ()=>{
    if(inputAdd.value.length > 0){
        criarTarefa()
    }
})

document.addEventListener('keydown', ()=>{
    if(event.key == 'Enter' && document.activeElement == inputAdd && inputAdd.value.length > 0){
        criarTarefa()
    }
})

function criarTarefa(){
    let tarefa = new Tarefa(inputAdd.value)
    let elementosTarefa = document.querySelectorAll('.tarefa')

    if(elementosTarefa.length == 0){
        alternarAlerta()
        tarefa.adicionarTarefa()
        database.adicionar(inputAdd.value)
    }else{
        tarefa.adicionarTarefa()
        database.adicionar(inputAdd.value)
    }


    inputAdd.value = ''
    inputAdd.focus()
}

function alternarAlerta(){
    let alerta = document.querySelector('.alertEmpty')
    
    alerta.classList.toggle('alertNone')
}