function inicializarGestores() {
    let combobox = document.getElementById("combobox")
    let pTitulo = document.getElementById("titulo")
    let pAutor = document.getElementById("autor")
    let pPortada = document.getElementById("portada")
    let boton = document.getElementById("boton")
    boton.onclick = function () {
        let libro = combobox.value
        fetch('https://openlibrary.org/api/books?bibkeys=' + libro + '&jscmd=details&format=json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                pTitulo.innerHTML = data[libro]['details']['title']
                pAutor.innerHTML = data[libro]['details']['publishers']
                let portadaS = data[libro]['thumbnail_url']
                pPortada.src = portadaS.replace("S", "M")
            })
    }
}

window.onload = inicializarGestores