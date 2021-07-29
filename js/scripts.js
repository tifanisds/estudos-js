const mensagem = document.querySelector(".message")
const apagar = document.querySelector("#reset")

let cliquesPorta1 = 0
let cliquesPorta2 = 0
let cliquesPorta3 = 0

let portaSelecionada = null

const portas = document.querySelectorAll(".door")
portas.forEach(function(porta) {
    porta.addEventListener("click", function() {
        
        if(porta.innerText == "Porta 1") {
            cliquesPorta1++
            portaSelecionada = cliquesPorta1
        }

        if(porta.innerText == "Porta 2") {
            cliquesPorta2++
            portaSelecionada = cliquesPorta2
        }

        if(porta.innerText == "Porta 3") {
            cliquesPorta3++
            portaSelecionada = cliquesPorta3
        }

        //se o texto da porta atual for igual a Porta 1
        //aumenta o valor da variavel CliquesPorta1 
        //elseif o valor da porta atual
        
        mensagem.innerText = `Você clicou na: ${this.innerText} ${portaSelecionada} vezes`
        mensagem.classList.add("show")
    })
})

apagar.addEventListener("click", function(){
    mensagem.innerText = ""
    mensagem.classList.remove("show")
})
