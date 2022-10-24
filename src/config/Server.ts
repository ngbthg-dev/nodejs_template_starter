import express, {Application, json, urlencoded} from "express"
import http from "http"
import {ServerConfig} from "../constant"
import {MysqlDataSource} from "./MysqlDataSource"

class Server
{
    private readonly app: Application
    private readonly httpServer: http.Server
    private readonly port: number

    constructor()
    {
        this.port = ServerConfig.port
        this.app = express()
        this.httpServer = http.createServer(this.app)
    }

    start(callback?: (port: number) => void)
    {
        this.connectDatabase()
        this.configureExpress()
        this.configureRoute()

        this.httpServer.listen(this.port)
        callback && callback(this.port)
    }

    private connectDatabase()
    {
        MysqlDataSource.initialize()
            .then(() => {
                console.log("--- connect database successfully")
            })
            .catch((error) => {
                console.error(error)
                console.log("--- database is dump")
            })
    }

    private configureExpress()
    {
        this.app.use(json())
        this.app.use(urlencoded({extended: true}))
    }

    private configureRoute()
    {

    }
}

export {Server}