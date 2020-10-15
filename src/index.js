const express = require('express'); //se indica que se requiere express
const morgan = require('morgan'); //se indica que se requiere morgan
// settings

const app = express(); // se inicia express y se instancia en una constante de nombre app.
app.set('port', 3000); //se define el puerto en el cual va a funcionar el servidro
// Utilities
app.use(morgan('dev')); //se indica que se va a usar morgan en modo dev
app.use(express.json()); //se indica que se va a usar la funcionalidad para manejo de json de express
//Routes (en este caso la ruta es /). Toda petición llega con dos parámetros, req en donde llega la consulta y res
//donde se entrega la respuesta
//Routes
app.use(require('./rutas/Datos.js'));
/* app.use(require('./rutas/DatosN1.js'));
app.use(require('./rutas/UltimoDatoN1.js')); */
//Start server
app.listen(app.get('port'), ()=> {
console.log("Servidor funcionando");
}); //se inicia el servidor en el puerto definido y se pone un mensaje en la consola.