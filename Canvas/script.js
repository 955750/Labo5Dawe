function inicializarGestores() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d"); // en el futuro se admitirá 3d, de momento no
    añadirImagen(context)

    /*
    // por defecto, se pinta en negro
    context.fillRect(10, 10, 200, 100); /* pintamos un rectangulo iniciando su vertice superior izquierdo en la posicion (10,10) con anchura 200 y altura 100 */

}

function añadirSpritesheet(context) {
    let spritesheet = new Image()
    spritesheet.onload = function () {

    }
}

window.onload = inicializarGestores