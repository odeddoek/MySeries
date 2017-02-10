import { ShowModel, IShow } from "../models/show";
import { UserModel, IUser } from "../models/user";

class ShowRepository {
    getUserShows(user: string): PromiseLike<any> {
        return UserModel.findOne({ username: user }).then((user: IUser) => {
            return user.tvShows;
        });
    }

    addUserTvShow(user: string, tvShow: number) {
        return UserModel.findOne({ username: user }).then((user: IUser) => {
            if (user.tvShows.indexOf(tvShow) === -1) {
                user.tvShows.push(tvShow);
            }

            return user.save();
        }, (err: any) => {
            console.log("addUserTvShow failed: ", err);
        });
    }
}

export { ShowRepository };
