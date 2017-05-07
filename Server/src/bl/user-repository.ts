import { UserModel, IUser } from "../models/user";

class UserRepository {
    public getUserById(id: string): PromiseLike<any> {
        return UserModel.findById(id);
    }
}

export { UserRepository };
