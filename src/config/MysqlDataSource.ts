import "reflect-metadata"
import { DataSource } from "typeorm"
import {DatabaseConfig} from "../constant"

const MysqlDataSource = new DataSource({
    ...DatabaseConfig,
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: []
})

export {MysqlDataSource}