export default class Tarefa {
    constructor(nome){
        this.nome = nome
        this.elementoHTML = this.#elementoTarefa()
    }

    adicionarTarefa(nome){
        let main = document.querySelector('main')
        main.appendChild(this.elementoHTML)
    }

    #elementoTarefa(){
        let span = document.createElement('span')
        span.setAttribute('class', 'tarefa')

        let checkbox = document.createElement('i')
        checkbox.setAttribute('class', 'ri-checkbox-blank-line')
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
        elemento.classList.toggle("ri-checkbox-blank-line")
        elemento.classList.toggle("ri-checkbox-fill")
    }
}