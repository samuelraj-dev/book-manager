// Import Dependencies
import express from 'express'
import 'dotenv/config'

// Import Config
import connectDB from './db/connect.js'

// Import MiddleWares
import errorHandler from './middlewares/errorHandler.js'
import notFound from './middlewares/notFound.js'

// Import Routes
import booksRoutes from './routes/books.js'

// Server Config
const app = express()

const PORT = process.env.PORT || null
const HOST = process.env.HOST || null

const server = () => {
    app.listen(PORT, HOST, () => {
        console.log(`server running at http://${HOST}:${PORT}/`)
    })
}
connectDB(server)

// Express MiddleWares
app.use(express.static('./public'))
app.use(express.json())

// Routes
app.use('/api/v1/books', booksRoutes)
app.use('/', (req, res) => {
    res.sendFile('./public/index.html')
})

// MiddleWares

app.use(notFound)
app.use(errorHandler)