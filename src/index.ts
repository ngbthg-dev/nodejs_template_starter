import {Server} from "./config"
import cluster from "cluster"
const numCPU = require("os").cpus().length

if (cluster.isPrimary)
{
    for (let i = 0; i < Math.ceil(numCPU/2); i++) {
        cluster.fork()
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    })
}
else
{
    (new Server()).start()
    console.log(`Worker ${process.pid} started`);
}