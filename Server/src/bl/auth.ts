import { UserModel, UserSchema, IUser } from "../models/user";

class Auth {
    validatePassword(username: string, password: string): PromiseLike<boolean> {
        var result : PromiseLike<boolean> = UserModel.count({ username: username, password: password }).then((res) => {
            return (res === 1);
        }, (err) => {
            console.log(err);
            return false;
        });

        return result;
    }

    createUser(username: string, password: string) : PromiseLike<boolean> {
        return UserModel.create({username: username, password: password}).then((res) => {
            return true;
        }, (err) => {
            console.log(err);
            return false;
        });
    }
}

export { Auth };
