require("dotenv").config()

const ServerConfig = {
    port: process.env.APP_PORT as any
}

export {ServerConfig}