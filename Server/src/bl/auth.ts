import { UserModel, IUser } from "../models/user";

class Auth {
    validatePassword(username: string, password: string): any {
        var result : boolean = UserModel.count({ username: username, password: password }).then((res) => {
            return (res == 1);
        }, (err) => {
            console.log(err);
            return false;
        });

        return result;
    }
}

export { Auth };
