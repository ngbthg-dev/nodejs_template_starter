import {CreateDateColumn, UpdateDateColumn} from "typeorm"

class HistoryModel
{
    @CreateDateColumn()
    readonly insertedAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}

export {HistoryModel}