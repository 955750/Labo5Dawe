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
                pTitulo.innerHTML = data[libro]['details']['full_title']
                pAutor.innerHTML = data[libro]['details']['publishers']
                portadaS = data[libro]['thumbnail_url']
                portada = portadaS.replace("S", "M")
                pPortada.src = portada
            })

        // FALTA ARREGLAR FORMATO Y COMPROBAR SI CAMPOS EXISTEN
    }
}

window.onload = inicializarGestores