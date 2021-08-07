import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routes from './routes/routes'
import { connection } from './config/database'

class App {
    public express: express.Application

    public constructor () {
        this.express = express()
        this.middleware()
    }

    private middleware (): void {
        this.express.use(express.json())
        this.express.use(cors())
        this.express.use(routes)
        connection
            .then(() => console.log("Connected to database"))
            .catch(error => console.log(`Erro to connect database ${error}`))
    }
}

export default new App()