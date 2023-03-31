//en el teminal npm init
//crear un archivo .js
//npm install express para instalar la primera vez la libreria express que nos ayudará a hacer nuestro servidor
//para ejecutar ese archivo se ejecuta en terminal como node nombre_archivo.js
//para ir al servidor: localhost:numero_de_puerto_que_pusimos, en este caso localhost:8080

const express = require("express") //se importa la libreria express
const cors = require("cors") //libreria para peticiones desde otros origenes diferentes al root

const app = express() //una copia de express

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador { //id del jugador
    constructor(id){
        this.id = id
    }


    asignarMokepon(mokepon){ //así enlazamos cada jugador con su id y su mokepon
        this.mokepon = mokepon
    }

    actualizarPosicion(x, y){
        this.x = x
        this.y = y
    }

    asignarAtaques(ataques){
        this.ataques = ataques
    }
}

class Mokepon{ //mokepon del jugador
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/unirse", (req,res) =>{ //cuando accedamos al servidor nos de una respueta, en este caso hola / es root, para entrar: http://localhost:8080/unirse
    const id = `${Math.random()}` //creamos un id aleatorio cada vez que alguien entre al servidor

    const jugador = new Jugador(id) 
    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*") //permitir peticiones desde otro origen, * es para cualquier origen

    res.send(id) //envia el id al servidor
})

app.post("/mokepon/:jugadorId", (req, res) =>{
    const jugadorId = req.params.jugadorId || "" // || "" en caso de que no venga se le asigna una cadena vacia
    const nombre = req.body.mokepon  || "" //tiene que ser la misma variable que cramos en el frontend, extraemos el mokepon del body
    const mokepon = new Mokepon(nombre)
    
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id) //la fxn findIndex me da la posición del elemento biuscado o -1 si no lo encuentra

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(mokepon) //asignamos el mokepon al jugador
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/mokepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0  

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id) 

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id) //filter nos permite filtrar los elementos de un array, en este caso el jugador.id que sea diferente de jugadorID  

    res.send({
        enemigos //lo mandamos al frontend
    })
})

app.post("/mokepon/:jugadorId/ataques", (req, res) =>{
    const jugadorId = req.params.jugadorId || "" // || "" en caso de que no venga se le asigna una cadena vacia
    const ataques = req.body.ataques  || [] //tiene que ser la misma variable que cramos en el frontend, extraemos el mokepon del body
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id) //la fxn findIndex me da la posición del elemento biuscado o -1 si no lo encuentra

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarAtaques(ataques) //asignamos el mokepon al jugador
    }

    res.end()
})

app.get("/mokepon/:jugadorId/ataques", (req, res) =>{
    const jugadorId = req.params.jugadorId || ""
    const jugador  = jugadores.find((jugador) => jugador.id === jugadorId)
    
    res.send({
        ataques: jugador.ataques || []
    })
})

app.listen(8080, () =>{ //crear servidor en el puerto 8080
    console.log("Servidor funcionando")
})