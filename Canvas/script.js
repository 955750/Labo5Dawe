window.onload = function () {
    var lienzo = document.getElementById("lienzo");
    var context = lienzo.getContext("2d"); // en el futuro se admitirá 3d, de momento no
    // por defecto, se pinta en negro
    context.fillRect(10, 10, 200, 100); /* pintamos un rectangulo iniciando su vertice superior izquierdo en la posicion (10,10) con anchura 200 y altura 100 */
}