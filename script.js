//aca el juego selecciona un numero al azar para que adivines, con math.floor redondea hacia abajo
//math.ramdom da el numero al azar, y lo multiplicamos 
//por la cantidad de numero que queremos que se encuentre
let numeroAzar = Math.floor(Math.random()*100) + 1;
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;


// Esta accion se va a ejecutar cuando se presione el boton chequear
function chequearResultado(){
    intentos++;
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor ingresa un numero valido entre 0 y 100';
        mensaje.style.color = 'black';
        return;
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '¡¡¡Felicitaciones!!! ¡¡Haz adivinado el numero!!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡¡¡Mas alto!!! ¡¡El numero es mayor al que dijiste!!';
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = '¡¡¡Mas bajo!!! ¡¡El numero es menor al que dijiste!!';
        mensaje.style.color = 'blue';
    }
}