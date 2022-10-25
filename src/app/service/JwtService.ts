import jwt, {JwtPayload, SignOptions} from "jsonwebtoken"
import {JwtConfig} from "../../constant"

class JwtService
{
    private readonly SERVER_TOKEN
    private readonly CLIENT_TOKEN

    constructor()
    {
        this.SERVER_TOKEN = JwtConfig.SERVER_TOKEN
        this.CLIENT_TOKEN = JwtConfig.CLIENT_TOKEN
    }

    sign(payload: any, options?: SignOptions): string
    {
        return jwt.sign(payload, this.SERVER_TOKEN, options)
    }

    verify(token: string): string | JwtPayload
    {
        return jwt.verify(token, this.SERVER_TOKEN)
    }

    encodePassword()
    {

    }

    decodePassword()
    {

    }

    createSignInToken()
    {

    }
}

export {JwtService}