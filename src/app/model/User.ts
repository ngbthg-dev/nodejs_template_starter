import {Column, Entity, Repository} from "typeorm"
import {AbstractModel} from "./AbstractModel"

@Entity()
class User extends AbstractModel
{
    @Column({type: "varchar", unique: true})
    readonly username: string

    @Column({type: "varchar", unique: true})
    readonly email: string

    @Column()
    password: string
}

export {User}