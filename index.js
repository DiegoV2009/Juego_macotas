//en el teminal npm init
//crear un archivo .js
//npm install express para instalar la primera vez la libreria express que nos ayudará a hacer nuestro servidor
//para ejecutar ese archivo se ejecuta en terminal como node nombre_archivo.js
//para ir al servidor: localhost:numero_de_puerto_que_pusimos, en este caso localhost:8080

const express = require("express") //se importa la libreria express

const app = express() //una copia de express

const jugadores = []

class Jugador {
    constructor(id){
        this.id = id
    }
}

app.get("/unirse", (req,res) =>{ //cuando accedamos al servidor nos de una respueta, en este caso hola / es root, para entrar: http://localhost:8080/unirse
    const id = `${Math.random()}` //creamos un id aleatorio cada vez que alguien entre al servidor

    const jugador = new Jugador(id) 
    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*") //permitir peticiones desde otro origen, * es para cualquier origen

    res.send(id) //envia el id al servidor
})

app.listen(8080, () =>{ //crear servidor en el puerto 8080
    console.log("Servidor funcionando")
})