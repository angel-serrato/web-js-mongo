const express = require('express')
const expressLayout = require('express-ejs-layouts')
const methodOverride = require('method-override')
const flash = require('connect-flash');
const session = require('express-session')
const dotenv = require('dotenv')
const connectDB = require('./server/config/db')

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware que interpreta datos codificados en url y los en expone en req.body
// extended: true, permite que los valores en los formularios puedan ser de cualquier tipo
app.use(express.urlencoded({ extended: true }))
// Middleware que parsea los datos JSON enviados en el cuerpo de las solicitudes
app.use(express.json())

app.use(methodOverride('_method'))
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        }
    })
)
app.use(flash({ sessionKeyName: 'flashMessage' }))
app.use(express.static('public'))
app.use(expressLayout)

app.use('/', require('./server/routes/customer'))

app.set('view engine', 'ejs')
app.set('layout', './layouts/main')

app.get('*', (req, res) => {
    res.status(404).render('404', { title: 'Not found' })
})

app.listen(PORT, (req, res) => {
    console.log(`Server listening on: http://localhost:${PORT}`)
})
