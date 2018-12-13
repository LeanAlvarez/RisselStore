const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const app = express()


//imports
const router = require('./routes')

// settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))


//rutas
app.use(router)



//static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () =>{
    console.log('Servidor escuchando en puerto: ', app.get('port') )
})