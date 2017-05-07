import { UserModel, IUser } from "../models/user";

class UserRepository {
    public getUserById(id: string): PromiseLike<any> {
        return UserModel.findById(id);
    }

    public getUserShowReviews(id: string): PromiseLike<any> {
        return UserModel.findById(id).populate("showReviews").then((user) => {
            return user.showReviews;
        });
    }

    public getUserEpisodeReviews(id: string): PromiseLike<any> {
        return UserModel.findById(id).populate("episodeReviews").then((user) => {
            return user.episodeReviews;
        });
    }

    public getUserByName(username: string): PromiseLike<any> {
        return UserModel.findOne({username});
    }
}

export { UserRepository };
