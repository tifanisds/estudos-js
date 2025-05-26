function adicionarTarefa() {
    const lista = document.getElementById("lista")
    const tarefa = document.getElementById("tarefa")

    const botaoExcluir = document.createElement("button")
    botaoExcluir.textContent = "Excluir"

    const novoItem = document.createElement("li")
    novoItem.textContent = tarefa.value

    lista.appendChild(novoItem)
    novoItem.appendChild(botaoExcluir)

    botaoExcluir.addEventListener("click", function() {
        lista.removeChild(novoItem)
    })

    tarefa.value = ""
}