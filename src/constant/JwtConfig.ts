require("dotenv").config()

enum JwtConfig {
    SERVER_TOKEN = <any>process.env.JWT_SECRET_SERVER_TOKEN,
    CLIENT_TOKEN = <any>process.env.JWT_SECRET_CLIENT_TOKEN
}

export {JwtConfig}