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

        let i = document.createElement('i')
        i.setAttribute('class', 'ri-checkbox-blank-line')
        i.addEventListener('click', ()=>{
            this.#mudarCheckbox(i)
        })
        span.appendChild(i)

        let nomeTarefa = document.createElement('span')
        nomeTarefa.innerText = this.nome
        span.appendChild(nomeTarefa)

        return span
    }

    #mudarCheckbox(elemento){
        elemento.classList.toggle("ri-checkbox-blank-line")
        elemento.classList.toggle("ri-checkbox-fill")
    }
}