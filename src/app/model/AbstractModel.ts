import {PrimaryGeneratedColumn, Column} from "typeorm"
import {HistoryModel} from "./HistoryModel"

abstract class AbstractModel
{
    @PrimaryGeneratedColumn("uuid")
    protected readonly id: string

    @Column(() => HistoryModel, {prefix: false})
    protected readonly historyModel: HistoryModel
}

export {AbstractModel}