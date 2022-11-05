
let tarjetasDestapadas = 0;
let tarjeta1 = null; 
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = true;
let timer = 60;
let timerInicial = 60;
let tiempoRegresivoId = null; 


let muestra_movi = document.getElementById('movimientos'); 
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

let frutas = ["🍆", "🍆", "🍉", "🍉", "🍊", "🍊", "🍍", "🍍", "🍎", "🍎", "🍏", "🍏",
  "🍒", "🍒", "🍓", "🍓", "🍇", "🍇", "🍈", "🍈",]

frutas = frutas.sort(() => { return Math.random()-0.5}) 
console.log(frutas);


function bloquearTarjetas() { 
  for (let i = 0; i <= 19; i++) {
    let tarjetaBloqueada = document.getElementById(i); 
    tarjetaBloqueada.innerHTML = frutas[i]; 
    tarjetaBloqueada.disabled = true; 
   
  }
}


function destapar(id) { 

  if (temporizador == false) {
    contarTiempo();
    temporizador = true; 
  }

  tarjetasDestapadas++; 
  if (tarjetasDestapadas == 1) {
    
    tarjeta1 = document.getElementById(id); 
    primerResultado = frutas[id] 
    tarjeta1.innerHTML = frutas[id];

   
    tarjeta1.disable = true 
   
  } else if (tarjetasDestapadas == 2) {
   
    tarjeta2 =  document.getElementById(id); 
    segundoResultado = frutas[id] 
    tarjeta2.innerHTML = frutas[id]; 
    tarjeta2.disable = true 

   
    movimientos++;
    muestra_movi.innerHTML = `Movimientos: ${movimientos} `; 

    if (primerResultado == segundoResultado) {
     
      tarjetasDestapadas = 0; 

      aciertos++;
      mostrarAciertos.innerHTML = `Aciertos: ${aciertos} `;

      if (aciertos == 9) {
        clearInterval(tiempoRegresivoId); 
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos} `
        mostrarTiempo.innerHTML = `Genial, solo tardaste ${timerInicial - timer} `
        muestra_movi.innerHTML = `Movimientos: ${movimientos} 🏃🏃🏃`
        document.getElementById("mensaje").innerHTML = ` LOGTASTE EL OBJETIVO `;
      }

    } else {
      
      setTimeout(() => {
        tarjeta1.innerHTML = ' ';   
        tarjeta2.innerHTML = ' ';
        tarjeta1.disabled = false; 
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0; 
      }, 900);
    }
  }
}
