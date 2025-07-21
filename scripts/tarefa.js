export default class Tarefa {
    constructor(){
    }

    novaTarefa(nome){
        this.nome = nome
        this.elementoHTML = this.#elementoTarefa()

        let main = document.querySelector('main')
        main.appendChild(this.elementoHTML)
    }

    #elementoTarefa(){
        let span = document.createElement('span')
        span.setAttribute('class', 'tarefa')

        let checkbox = document.createElement('div')
        checkbox.setAttribute('class', 'checkbox')
        checkbox.classList.add('checkbox')
        checkbox.addEventListener('click', ()=>{
            this.#mudarCheckbox(checkbox)
        })
        span.appendChild(checkbox)

        let nomeTarefa = document.createElement('span')
        nomeTarefa.innerText = this.nome
        span.appendChild(nomeTarefa)

        return span
    }

    #mudarCheckbox(elemento){
        elemento.classList.toggle("checked")
        elemento.classList.toggle("unchecked")
    }
}