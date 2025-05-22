function converter() {
    const celsius = document.getElementById('celsius').value;

    if (celsius === '' || celsius === ' ') {
        document.getElementById('resultado').textContent = "Por favor, digite uma temperatura válida"
        return
    }

    const fahrenheit = (celsius * 9/5) + 32;

    document.getElementById('resultado').textContent = `${celsius} graus celsius = ${fahrenheit} graus fahrenheit`
}