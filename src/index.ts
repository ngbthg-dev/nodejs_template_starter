import {Server} from "./config"
import cluster from "cluster"
const numCPU = require("os").cpus().length

if (cluster.isPrimary)
{
    for (let i = 0; i < Math.ceil(numCPU/2); i++) {
        cluster.fork()
    }

    cluster.on("exit", () => {

    })
}
else
{
    const server = new Server()
    server.start()
}