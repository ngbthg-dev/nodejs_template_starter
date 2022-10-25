import {Repository, EntityRepository} from "typeorm"
import {User} from "../model"

@EntityRepository(User)
class UserRepository extends Repository<User>
{

}

export {UserRepository}