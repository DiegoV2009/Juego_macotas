const sectionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
const secctionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton_mascota') //const para crear objeto o variable que no cambia, aqui pedimos a nuectro documento html que obtenga el elemento id de boton mascota
const botonReiniciar = document.getElementById('boton_reiniciar')


const sectionSeleccionarMacota = document.getElementById('seleccionar_mascota')
const sectionTitulo = document.getElementById('titulo_id')
const spanMascotaJugador = document.getElementById('mascotaJugador')

const spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

const sectionMensajes = document.getElementById('resultado') //en la sección que queremos poner el parrafo
const sectionResultadoBatalla = document.getElementById('resultado_de_guerra')
const ataquesDelJugador = document.getElementById('ataques_del_jugador')
const ataquesDelEnemigo = document.getElementById('ataques_del_enemigo')

const spanVictoriasDelJugador = document.getElementById('victorias_jugador')
const spanVictoriasDelEnemigo = document.getElementById('victorias_enemigo')
const contenedorTarjetas = document.getElementById('contenedor_tarjetas')
const mascotaEnemigaPantalla2 = document.getElementById('dibujo_mascota_enemigo')
const mascotaJugadorPantalla2 = document.getElementById('dibujo_mascota_jugador')
const contenedorBotonesAtaque = document.getElementById('ataques')

const secctionVerMapa = document.getElementById('ver_mapa')
const mapa = document.getElementById('mapa')
const anchoMaximoDelMapa = 600

let mokepones = [] //arreglo donde tendremos los objetos de la calse Mokepon
let mokeponesEnemigos = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatihueya 
let inputLangostelvis 
let inputTucapalma 
let inputPydos 
let mascotaJugador
let mascotaJugadorObjeto
let imagenMascotaJugador
let imagenMascotaEnemiga
let botonesDeAtaque
let ataquesMokeponEnemigo
let botonFuego 
let botonTierra 
let botonAgua 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataquesUsadosEnemigo = []
let vicotirasDelEnemigo = 0
let victoriasPropias = 0
let lienzo = mapa.getContext("2d") //aquí creamos el canvas 2d 
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "imagenes/mokemap.png";
let alturaBuscada 
let anchoDelMapa = window.innerWidth - 20
let jugadorId = null //esta es para json
let enemigoId = null



if (anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa-20
}
alturaBuscada = anchoDelMapa * 600/800

mapa.width = anchoDelMapa
mapa.height = alturaBuscada


class Mokepon{ //clase Mokepon
    constructor(nombre, foto, vida, fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, anchoDelMapa -this.ancho)
        this.y = aleatorio(0, alturaBuscada - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0 
    }

    pintarMokepon(){
        lienzo.drawImage( 
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

//cramos objetos de la calase Mokepon
let hipodoge = new Mokepon('Hipodoge', 'imagenes/mokepons_mokepon_hipodoge_attack.png', 5, 'imagenes/hipodoge.png')
let capipepo = new Mokepon('Capipepo', 'imagenes/mokepons_mokepon_capipepo_attack.png', 5, 'imagenes/capipepo.png')
let ratihueya = new Mokepon('Ratihueya', 'imagenes/mokepons_mokepon_ratigueya_attack.png', 5, 'imagenes/ratigueya.png')
let langostelvis = new Mokepon('Langostelvis', 'imagenes/mokepons_mokepon_langostelvis_attack.png', 5, 'imagenes/langostelvis.png')
let pydos = new Mokepon('Pydos', 'imagenes/mokepons_mokepon_pydos_attack.png', 5, 'imagenes/pydops.png')
let tucapalma = new Mokepon('Tucapalma', 'imagenes/mokepons_mokepon_tucapalma_attack.png', 5, 'imagenes/tucapalma.png')



const HIPODOGE_ATAQUES = [
    {nombre: '💧', id :'boton_agua'},    
    {nombre: '💧', id :'boton_agua'},
    {nombre: '💧', id :'boton_agua'},
    {nombre: '🔥', id :'boton_fuego'},
    {nombre: '🌱', id :'boton_tierra'}
]

const CAPIPEPO_ATAQUES = [
    {nombre: '🌱', id :'boton_tierra'},
    {nombre: '🌱', id :'boton_tierra'},
    {nombre: '🌱', id :'boton_tierra'},
    {nombre: '💧', id :'boton_agua'},
    {nombre: '🔥', id :'boton_fuego'}
]

const RATIHUEYA_ATQUES = [
    {nombre: '🔥', id :'boton_fuego'},
    {nombre: '🔥', id :'boton_fuego'},
    {nombre: '🔥', id :'boton_fuego'},
    {nombre: '💧', id :'boton_agua'},
    {nombre: '🌱', id :'boton_tierra'}  
]

const TUCAPALMA_ATAQUES = [
    {nombre: '💧', id :'boton_agua'},    
    {nombre: '💧', id :'boton_agua'},
    {nombre: '🔥', id :'boton_agua'},
    {nombre: '🔥', id :'boton_fuego'},
    {nombre: '🌱', id :'boton_tierra'}
]

const LANGOSTELVIS_ATAQUES = [
    {nombre: '💧', id :'boton_agua'},    
    {nombre: '🔥', id :'boton_agua'},
    {nombre: '🔥', id :'boton_agua'},
    {nombre: '🌱', id :'boton_fuego'},
    {nombre: '🌱', id :'boton_tierra'}
]

const PYDOS_ATAQUES = [
    {nombre: '💧', id :'boton_agua'},    
    {nombre: '💧', id :'boton_agua'},
    {nombre: '🔥', id :'boton_agua'},
    {nombre: '🌱', id :'boton_fuego'},
    {nombre: '🌱', id :'boton_tierra'}
]
hipodoge.ataques.push(...HIPODOGE_ATAQUES) //los 3 puntos (...) son para que no se comporte como una lsita sino como si todo lo que esta en la variable HIPODOGE_ATAQUES se hubiese escrito dentro de los parentesis
capipepo.ataques.push(...CAPIPEPO_ATAQUES)
ratihueya.ataques.push( //push para agregar elementos a un arreglo
    //creamos un objeto el cual solo tendra info, no requiere de clase
    ...RATIHUEYA_ATQUES
)
tucapalma.ataques.push(...TUCAPALMA_ATAQUES)
langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)
pydos.ataques.push(...PYDOS_ATAQUES)



mokepones.push(hipodoge, capipepo, ratihueya, tucapalma, langostelvis, pydos)

function iniciarJuego(){ //escucahdor de botones, para cuando ya se haya cargado todo el html  
    //esconder los ataques y el boton de reiniciar del html, mientras no hemos elegido la mascota
    sectionSeleccionarAtaque.style.display = 'none'
    secctionReiniciar.style.display = 'none'
    secctionVerMapa.style.display = 'none'

    mokepones.forEach(mokepon => { //por cada elemento del arreglo hace lo siguiente
        //aqui pondremos un enlace para manejar el dom de html desde js
       
        //templates literarios 
        //dejar espacio entre } y / es decir en id = ${mokepon.nombre} /> no puede ir así id = ${mokepon.nombre}/>
        opcionDeMokepones = `
            <input type = "radio" name = "mascota" id = ${mokepon.nombre} />  <!--Hay que agrupar los radios en grupos, y ponerle nombre al grupo, el id es el valor que se le da al input radio-->
            <label class="tarjeta_de_juego" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label> <!--es un label que va con el radio-->
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones //el + es para iterar a traves de los objetos,en este caso 3
        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatihueya = document.getElementById('Ratihueya')
        inputLangostelvis = document.getElementById('Langostelvis')
        inputPydos = document.getElementById('Pydos')
        inputTucapalma = document.getElementById('Tucapalma')

    })
    
    //botones
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador) //que el boton escuche el evento de darle click
    botonReiniciar.addEventListener('click', reiniciarJuego)

    unirseAlJuego()   
}

function unirseAlJuego(){
    //fetch("http://localhost:8080/unirse", {
    //    method: "post"
    //}) para un post
    fetch("http://localhost:8080/unirse") //para get
        .then(function (res){ //cuando ya ejecute fetch que es una función asincrona
            if(res.ok){ //ok es si la petición se cumplio
                res.text() 
                    .then(function(respueta){
                        console.log(respueta)
                        jugadorId = respueta //el id del jugador
                    })
            }
        })
}

function aleatorio (min, max){ //da un numero aleatorio
    return Math.floor(Math.random()*(max-min+1)+min)
}


function seleccionarMascotaJugador(){ 
    //dar visibilidad a la sección de combate
   //sectionSeleccionarAtaque.style.display = 'flex'
    secctionVerMapa.style.display = 'flex'
    //esconder la sección de elegir mascota
    sectionSeleccionarMacota.style.display = 'none'
    sectionTitulo.style.display = 'none'

   
    //logica de selección de mascota
    if(inputHipodoge.checked){
        mascotaJugador = inputHipodoge.id
        imagenMascotaJugador = hipodoge.foto
    } else if(inputCapipepo.checked){
        mascotaJugador = inputCapipepo.id
        imagenMascotaJugador = capipepo.foto
    } else if(inputRatihueya.checked){
        mascotaJugador = inputRatihueya.id
        imagenMascotaJugador = ratihueya.foto
    } else if(inputLangostelvis.checked){     
        mascotaJugador = inputLangostelvis.id
        imagenMascotaJugador = langostelvis.foto
    }else if(inputPydos.checked){    
        mascotaJugador = inputPydos.id
        imagenMascotaJugador = pydos.foto
    }else if(inputTucapalma.checked){   
        mascotaJugador = inputTucapalma.id
        imagenMascotaJugador = tucapalma.foto
    }else{
        alert("No seleccionaste una mascota")
    }

    seleccionarMokepon(mascotaJugador)

    iniciarMapa()    
    extraerAtaques(mascotaJugador)
}

function seleccionarMokepon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, { //comillas simples para poder agregar ${}
        method: "post", //metodo post
        headers:{
            "Content-Type": "application/json" //se dice que estamos usando formato json application con doble p
        },
        body: JSON.stringify({ //nuestra petición, con esta función tomamos el JSON y lo convertimos en cadena de texto 
            mokepon: mascotaJugador  //esta varibale va para el backend
        })
    })
}

function extraerAtaques(mascotaJugador){
    //Logica para dar los ataques a la mascota dependiendo de que mascota sea
    //hipodoge 3 de agua 1 de tierra y uno de fuego...
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){ //Crea los botones de los ataques de la mascota
    ataques.forEach(ataque => { //por cada elemento del arreglo hace lo siguiente
        //aqui pondremos un enlace para manejar el dom de html desde js
       
        //templates literarios 
        //dejar espacio entre } y / es decir en id = ${mokepon.nombre} /> no puede ir así id = ${mokepon.nombre}/>
        botonesDeAtaque = `
            <button id = ${ataque.id} class="boton_de_ataque BAtaque"> ${ataque.nombre} </button>
        `
        contenedorBotonesAtaque.innerHTML += botonesDeAtaque //el + es para iterar a traves de los objetos,en este caso 3
    })
    
    botonFuego = document.getElementById('boton_fuego')
    botonTierra = document.getElementById('boton_tierra')
    botonAgua = document.getElementById('boton_agua')
    botones = document.querySelectorAll('.BAtaque') //seleccionar todos los que tengan el nombre de la clase

}

function secuenciaAtaque(){ //se crea un array de los ataques del jugador
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => { //e es el evento de dar click
            if(e.target.innerText === '🔥'){ //e.target.textContent da el contenido del boton al que se le dio click pero a veces falla, se usa innetrText y solucionado
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.background = 'blue'
                boton.disabled = true //disabled
            } else if(e.target.innerText === '💧'){
                ataqueJugador.push('Agua')
                console.log(ataqueJugador)
                boton.style.background = 'blue'
                boton.disabled = true
            } else{
                ataqueJugador.push('Tierra')
                console.log(ataqueJugador)
                boton.style.background = 'blue' 
                boton.disabled = true  
            }
            if(ataqueJugador.length === 5){
                enviarAtques()
            }
        })
    }) 
}

function enviarAtques(){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        }),
    });

    intervalo = setInterval(obtenerAtaques, 50) //esta funcion pregunta cada 50 ms si ya el enemigo envío sus ataques
}

function obtenerAtaques(){
    fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
     .then(function(res){
        if(res.ok){
            res.json()
             .then(function({ ataques }){
                if(ataques.length === 5){
                    ataqueEnemigo = ataques
                    combate()
                }
             })
        }
     })
}

//
function seleccionarMascotaEnemigo(enemigo){  
    //ataquesMokeponEnemigo = enemigo.ataques
    DibujarMacotasElegidas(imagenMascotaJugador, enemigo.foto, enemigo.nombre)
    secuenciaAtaque()
}

function DibujarMacotasElegidas(imMascotaJugador, mascotaEnemigo, nombreEnemigo){
    let dibujoMascotaJugador
    let dibujoMacotaEnemigo
    dibujoMascotaJugador = `<img src=${imMascotaJugador} alt=${mascotaJugador} style = width:150px> `
    dibujoMacotaEnemigo = `<img src=${mascotaEnemigo} alt=${nombreEnemigo} style = width:150px>`
    mascotaJugadorPantalla2.innerHTML = dibujoMascotaJugador
    mascotaEnemigaPantalla2.innerHTML = dibujoMacotaEnemigo
}

function ataqueAleatorioEnemigo(){ //
    let ataqueEnemigoElegido = 0
    let numAtaqueEnemigo
    while(ataqueEnemigoElegido == 0){
        numAtaqueEnemigo = aleatorio(0,ataquesMokeponEnemigo.length-1)
        if(!ataquesUsadosEnemigo.includes(numAtaqueEnemigo))
        {
            ataqueEnemigoElegido = 1   
        }
    }

    if(ataquesMokeponEnemigo[numAtaqueEnemigo].nombre == '🔥' )
    {
        ataqueEnemigo.push('Fuego') 
    }else if(ataquesMokeponEnemigo[numAtaqueEnemigo].nombre == '💧' ){
        ataqueEnemigo.push('Agua')
    }else{ 
        ataqueEnemigo.push('Tierra')
    }
    ataquesUsadosEnemigo.push(numAtaqueEnemigo)
   iniciarPelea()
}



function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){  //ataque enemigo vs mi ataque

    clearInterval(intervalo)
    for (let i = 0; i < ataqueJugador.length; i++) {
        if(ataqueEnemigo[i] === ataqueJugador[i]){
            indexAmbosOponentes(i, i)
            mensajeResultadoBatalla('Empate 🥱')
        }else if ((ataqueEnemigo[i] == 'Fuego' && ataqueJugador[i] == 'Agua') || (ataqueEnemigo[i] == 'Tierra' && ataqueJugador[i] == 'Fuego') || (ataqueEnemigo[i] == 'Agua' && ataqueJugador[i] == 'Tierra')){
            indexAmbosOponentes(i, i)
            mensajeResultadoBatalla('Ganaste 🎉🎉🎉')
            victoriasPropias = victoriasPropias+1
        }else{
            indexAmbosOponentes(i, i)
            mensajeResultadoBatalla('Perdiste 😭😭😭')
            vicotirasDelEnemigo = vicotirasDelEnemigo+1
        }
        
    }
    
    //victorias propias y del enemigo
    spanVictoriasDelJugador.innerHTML = victoriasPropias
    spanVictoriasDelEnemigo.innerHTML = vicotirasDelEnemigo
    revisarVictorias()
}


function mensajeResultadoBatalla(mensaje)
{
    let nuevoAtaqueDelJugador = document.createElement('p') //crea un parrafo
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    let ResultadoBatalla = document.createElement('p')

    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    ResultadoBatalla.innerHTML = mensaje

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador) //añade el parrafo al final de lo que ya está anteriormente
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    sectionResultadoBatalla.appendChild(ResultadoBatalla)
}


function revisarVictorias(){ //revisar si tine más victorias el jugador o el enemigo

    if(vicotirasDelEnemigo<victoriasPropias){
        CrearMensajeFinal("Felicitaciones! Ganaste c:")
    }
    else if(victoriasPropias<vicotirasDelEnemigo){
        CrearMensajeFinal("Lo sentimos, Perdiste :c")
    }else{
        CrearMensajeFinal("Empateeee")
    }
}

function CrearMensajeFinal(resultadoFinal){ //metodo para crear el parrafo final (ganaste o perdiste)
   
    //dar visibilidad al boton de reiniciar
    secctionReiniciar.style.display = 'flex' 

    let sectionMensajes = document.getElementById('resultado') //en la sección que queremos poner el parrafo
    sectionMensajes.innerHTML = resultadoFinal

    //deshabilitar los botones cuando ya se ganó o perdió

}


function reiniciarJuego(){
    location.reload()
}

function pintarCanvas(){ 

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x+mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y+mascotaJugadorObjeto.velocidadY 
    lienzo.clearRect(0, 0, mapa.width, mapa.height) //funcion que limpia el mapa, en este caso desde la posición 0,0 hasta el ancho y alto del mapa
    
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y) //esta función envia la posición a el backend
    
    mokeponesEnemigos.forEach(function (mokepon) {
        enemigoId =  mokepon.id
        mokepon.pintarMokepon()
        revisarColision(mokepon) 
    }) 

   
}

function enviarPosicion(x, y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, { //la posicion del jugador
        method : "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x, //x:x se puede abreviar cuando hay mismosnombres
            y
        })
    }) 
    .then(function(res){ 
        if (res.ok){ //si hubo respuesta de jugador id
            res.json()
             .then(function({enemigos}){  //es como decir respuesta.enemigos, no olvidar llaves
                //recordad que los enemigos vienen del backend
                console.log(enemigos)
                mokeponesEnemigos = enemigos.map(function (enemigo){
                    const mokeponNombre =  enemigo.mokepon.nombre || ""
                    let mokeponEnemigo = null
                    if(mokeponNombre === "Hipodoge"){
                        mokeponEnemigo = new Mokepon('Hipodoge', 'imagenes/mokepons_mokepon_hipodoge_attack.png', 5, 'imagenes/hipodoge.png', enemigo.id)
                    }else if(mokeponNombre === "Capipepo"){
                        mokeponEnemigo = new Mokepon('Capipepo', 'imagenes/mokepons_mokepon_capipepo_attack.png', 5, 'imagenes/capipepo.png', enemigo.id)
                    }else if(mokeponNombre === "Ratihueya"){
                        mokeponEnemigo = new Mokepon('Ratihueya', 'imagenes/mokepons_mokepon_ratigueya_attack.png', 5, 'imagenes/ratigueya.png', enemigo.id)
                    }else if(mokeponNombre === "Langostelvis"){
                        mokeponEnemigo = new Mokepon('Langostelvis', 'imagenes/mokepons_mokepon_langostelvis_attack.png', 5, 'imagenes/langostelvis.png', enemigo.id)
                    }else if(mokeponNombre === "Pydos"){
                        mokeponEnemigo = new Mokepon('Pydos', 'imagenes/mokepons_mokepon_pydos_attack.png', 5, 'imagenes/pydops.png', enemigo.id)
                    }else if(mokeponNombre === "Tucapalma"){
                        mokeponEnemigo = new Mokepon('Tucapalma', 'imagenes/mokepons_mokepon_tucapalma_attack.png', 5, 'imagenes/tucapalma.png', enemigo.id)
                    }
                    mokeponEnemigo.x = enemigo.x
                    mokeponEnemigo.y = enemigo.y
                    enemigoId = enemigo.id
                    return mokeponEnemigo;
                })
             })
        }
     })
}

function moverDerecha(){ //aumentamos 5px a la posición del personaje y luego lo repintamos
    mascotaJugadorObjeto.velocidadX = 5
    
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimiento(){   
    mascotaJugadorObjeto.velocidadY = 0
    mascotaJugadorObjeto.velocidadX = 0   
}

function presionoTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()                
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha() 
            break
        default:
            break
    }
}

function iniciarMapa(){
   
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50) //setInterval me ejecuta repetidamente una función, segundo parametro es en ms que es cada cuanto tiempo va a ejecutar esa función
    console.log(mascotaJugadorObjeto)
    window.addEventListener('keydown', presionoTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
        
    }
}

function revisarColision(enemigo){
    const  arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y+enemigo.alto
    const derechaEnemigo = enemigo.x+enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const  arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y+mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x+mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x
    
    

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return
    }
        //console.log("hay colision")
       
        console.log(enemigoId)
        sectionSeleccionarAtaque.style.display = 'flex'
        secctionVerMapa.style.display = 'none'
       seleccionarMascotaEnemigo(enemigo)
        detenerMovimiento()

        
    
    clearInterval(intervalo) //me limpia el ciclo de repetir la función cada intervalo
}

window.addEventListener('load', iniciarJuego) //cuando cargue el html va a inicia el js

