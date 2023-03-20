let ventanaDeslizanteCoordX = 0;
let ventanaDeslizanteCoordY = 0;
let ventanaDeslizanteAncho = 30;
let ventanaDeslizanteAlto = 40;
let spritesheet = new Image();

function inicializarGestores() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    añadirSpritesheetACanvas(context);
    añadirOpcionMoverVentanaDeslizante(context, canvas);
}

function añadirSpritesheetACanvas(context) {
    spritesheet.onload = function () {
        actualizarCanvas(context)
    };
    spritesheet.src = "spritesheet.png";
}

function actualizarCanvas(context) {
    context.drawImage(spritesheet, 0, 0);
    context.strokeStyle = "red";
    context.strokeRect(ventanaDeslizanteCoordX, ventanaDeslizanteCoordY, ventanaDeslizanteAncho, ventanaDeslizanteAlto);
    context.font = "9px sans-serif";
    context.fillText(`(${ventanaDeslizanteCoordX}, ${ventanaDeslizanteCoordY})`, spritesheet.width - 45, 15);
    dibujarSpritesheetPequeño(context);
}

function dibujarSpritesheetPequeño(context) {
    context.drawImage(
        spritesheet, ventanaDeslizanteCoordX, ventanaDeslizanteCoordY, ventanaDeslizanteAncho, ventanaDeslizanteAlto,
        spritesheet.width + 5, 0, ventanaDeslizanteAncho * 2, ventanaDeslizanteAlto * 2
    )
}

function añadirOpcionMoverVentanaDeslizante(context, canvas) {
    document.addEventListener("keydown", (event) => {
        if (event.code === "ArrowUp") {
            if (ventanaDeslizanteCoordY !== 0) {
                ventanaDeslizanteCoordY -= 1;
            }
            event.preventDefault()
        } else if (event.code === "ArrowDown") {
            if (ventanaDeslizanteCoordY !== (spritesheet.height - ventanaDeslizanteAlto) - 1) {
                ventanaDeslizanteCoordY += 1;
            }
            event.preventDefault()
        } else if (event.code === "ArrowLeft") {
            if (ventanaDeslizanteCoordX !== 0) {
                ventanaDeslizanteCoordX -= 1;
            }
            event.preventDefault()
        } else if (event.code === "ArrowRight") {
            if (ventanaDeslizanteCoordX !== (spritesheet.width - ventanaDeslizanteAncho) - 1) {
                ventanaDeslizanteCoordX += 1;
            }
            event.preventDefault()
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        actualizarCanvas(context);
    });
}

window.onload = inicializarGestores