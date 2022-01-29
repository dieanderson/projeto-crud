const express = require('express')
const path = require('path')

const app = express()

//Settings
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))

//Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Padrão'
    })
})

//404 error
app.use((req, res) => {
    res.send('Página não encontrada!')
})

//Run the Server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))