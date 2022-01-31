const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

//Connect database
db.connect()

//Settings
//Def template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//Def public files
app.use(express.static(path.join(__dirname, 'public')))
//Enable server receive data post method(form)
app.use(express.urlencoded({ extended: true }))

//Def routes
app.use('/', routes)

//404 error
app.use((req, res) => {
    res.send('Página não encontrada!')
})

//Run the Server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))