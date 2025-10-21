const fotos = [
    {
        src: "./assets/img/snoopy-academia.jpg",
        descricao: "Snoopy na academia"
    },
    {
        src: "./assets/img/snoopy-apaixonado.jpg",
        descricao: "Snoopy apaixonado"
    },
    {
        src: "./assets/img/snoopy-bravo.jpg",
        descricao: "Snoopy bravo"
    },
    {
        src: "./assets/img/snoopy-cozinheiro.jpg",
        descricao: "Snoopy cozinheiro"
    },
    {
        src: "./assets/img/snoopy-dancarino.jpg",
        descricao: "Snoopy dançarino"
    },
    {
        src: "./assets/img/snoopy-dorminhoco.jpg",
        descricao: "Snoopy dorminhoco"
    },
    {
        src: "./assets/img/snoopy-fedido.jpg",
        descricao: "Snoopy fedido"
    },
    {
        src: "./assets/img/snoopy-gordinho.jpg",
        descricao: "Snoopy gordinho"
    },
    {
        src: "./assets/img/snoopy-risonho.jpg",
        descricao: "Snoopy risonho"
    },
    {
        src: "./assets/img/snoopy-triste.jpg",
        descricao: "Snoopy triste"
    },
    {
        src: "./assets/img/snoopy-vaidoso.jpg",
        descricao: "Snoopy vaidoso"
    }
]

function trocarFoto() {
    const indice = Math.floor(Math.random() * fotos.length)
    const img = document.getElementById("foto")
    const texto = document.getElementById("descricao")

    img.src = fotos[indice].src
    texto.textContent = fotos[indice].descricao
}

