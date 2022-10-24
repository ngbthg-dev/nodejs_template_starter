import "reflect-metadata"
import { DataSource } from "typeorm"
import {DatabaseConfig} from "../constant"
import {User} from "../app/model"

const MysqlDataSource = new DataSource({
    ...DatabaseConfig,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: []
})

export {MysqlDataSource}