const sectionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
const secctionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton_mascota') //const para crear objeto o variable que no cambia, aqui pedimos a nuectro documento html que obtenga el elemento id de boton mascota
const botonFuego = document.getElementById('boton_fuego')
const botonTierra = document.getElementById('boton_tierra')
const botonAgua = document.getElementById('boton_agua')
const botonReiniciar = document.getElementById('boton_reiniciar')


const sectionSeleccionarMacota = document.getElementById('seleccionar_mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatihueya = document.getElementById('ratihueya')
const inputLangostelvis = document.getElementById('langostelvis')
const inputTucapalma = document.getElementById('tucapalma')
const inputPydos = document.getElementById('pydos')
const spanMascotaJugador = document.getElementById('mascotaJugador')

const spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

const sectionMensajes = document.getElementById('resultado') //en la sección que queremos poner el parrafo
const ataquesDelJugador = document.getElementById('ataques_del_jugador')
const ataquesDelEnemigo = document.getElementById('ataques_del_enemigo')

const spanVidasJugador = document.getElementById('vidas_jugador')
const spanVidasEnemigo = document.getElementById('vidas_enemigo')

let ataqueJugador
let ataqueEnemigo 
let vidasEnemigo = 3
let vidasPropias = 3


function iniciarJuego(){ //escucahdor de botones, para cuando ya se haya cargado todo el html  
    //esconder los ataques y el boton de reiniciar del html, mientras no hemos elegido la mascota
    sectionSeleccionarAtaque.style.display = 'none'
    secctionReiniciar.style.display = 'none'
    
    //botones
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador) //que el boton escuche el evento de darle click
    
    botonFuego.addEventListener('click', ataqueFuego)
    botonTierra.addEventListener('click', ataqueTierra)
    botonAgua.addEventListener('click', ataqueAgua)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function aleatorio (min, max){ //da un numero aleatorio
    return Math.floor(Math.random()*(max-min+1)+min)
}

function Combate(){  //ataque enemigo vs mi ataque
    if(ataqueEnemigo == ataqueJugador){
        CrearMensaje('Empate 🥱')
    }else if ((ataqueEnemigo == 'Fuego' && ataqueJugador == 'Agua') || (ataqueEnemigo == 'Tierra' && ataqueJugador == 'Fuego') || (ataqueEnemigo == 'Agua' && ataqueJugador == 'Tierra')){
        CrearMensaje('Ganaste 🎉🎉🎉')
        vidasEnemigo = vidasEnemigo-1
    }else{
        CrearMensaje('Perdiste 😭😭😭')
        vidasPropias = vidasPropias-1
    }
    
    //vidas propias y del enemigo
    spanVidasJugador.innerHTML = vidasPropias
    spanVidasEnemigo.innerHTML = vidasEnemigo
    revisarVidas()
}

function CrearMensaje(resultado){ //metodo para crear un parrafo de ataque nuevo
    let nuevoAtaqueDelJugador = document.createElement('p') //crea un parrafo
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    
    sectionMensajes.innerHTML = resultado //reemplaza el contenido de resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador) //añade el parrafo al final de lo que ya está anteriormente
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function CrearMensajeFinal(resultadoFinal){ //metodo para crear el parrafo final (ganaste o perdiste)
   
    //dar visibilidad al boton de reiniciar
    secctionReiniciar.style.display = 'flex' 

    let sectionMensajes = document.getElementById('resultado') //en la sección que queremos poner el parrafo
    sectionMensajes.innerHTML = resultadoFinal

    //deshabilitar los botones cuando ya se ganó o perdió
    let botonMascotaJugador = document.getElementById('boton_mascota') 
    botonMascotaJugador.disabled =true
    let botonFuego = document.getElementById('boton_fuego')
    botonFuego.disabled = true
    let botonTierra = document.getElementById('boton_tierra')
    botonTierra.disabled = true
    let botonAgua = document.getElementById('boton_agua')
    botonAgua.disabled = true
}

function seleccionarMascotaJugador(){ 
    //dar visibilidad a la sección de combate
    sectionSeleccionarAtaque.style.display = 'flex'

    //esconder la sección de elegir mascota
    sectionSeleccionarMacota.style.display = 'none'

    //logica de selección de mascota
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if(inputRatihueya.checked){
        spanMascotaJugador.innerHTML = 'Ratihueya'
    } else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = 'Langostelvis'
    } else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML = 'Tucapalma'
    } else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = 'Pydos'       
    } else{
        alert("No seleccionaste una mascota")
    }
    
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){ 
    let Enemigoaleatorio = aleatorio(1,6)
    if(Enemigoaleatorio == 1){
        //hipodoge
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if(Enemigoaleatorio ==2){
        //capipepo
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else if (Enemigoaleatorio ==3){
        //ratihueya
        spanMascotaEnemigo.innerHTML = 'Ratihueya'
    } else if (Enemigoaleatorio ==4){
        //langostelvis
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if(Enemigoaleatorio ==5){
        //Tucapalma
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    }else{
        //Pydos
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

function ataqueAleatorioEnemigo(){ //
    let numAtaqueEnemigo = aleatorio(1,3)
    if  (numAtaqueEnemigo == 1){
        ataqueEnemigo = 'Fuego'
    }else if(numAtaqueEnemigo ==2){
        ataqueEnemigo = 'Tierra'
    }else{
        ataqueEnemigo = 'Agua'
    }
    Combate()
}

function revisarVidas(){ //si el enemigo tiene 0 vidas o yo tengo 0 vidas se acaba el juego

    if(vidasEnemigo==0){
        CrearMensajeFinal("Felicitaciones! Ganaste c:")
    }
    else if(vidasPropias ==0){
        CrearMensajeFinal("Lo sentimos, Perdiste :c")
    }
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego) //cuando cargue el html va a inicia el js


