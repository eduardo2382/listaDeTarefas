export default class Database {
    #nome
    #base = []

    constructor(nome){
        this.#nome = nome

        if(localStorage.getItem(this.#nome) != null){
            this.#base = JSON.parse(localStorage.getItem(this.#nome))
        }
    }

    adicionar(valor){
        this.#base.push(valor)

        this.#atualizarLocalStorage()
    }

    #atualizarLocalStorage(){
        localStorage.setItem(this.#nome, JSON.stringify(this.#base))
    }
}