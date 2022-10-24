// import {MysqlDataSource} from "../../config"
// import {User} from "../model"
//
// const UserRepository = MysqlDataSource.getRepository(User).extend({
//
// })

import {Repository, EntityRepository} from "typeorm"
import {User} from "../model"

@EntityRepository(User)
class UserRepository extends Repository<User>
{

}

export {UserRepository}