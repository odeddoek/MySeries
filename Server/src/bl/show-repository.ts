import { UserModel, IUser } from "../models/user";
import { IShowReview, ShowReviewModel } from "../models/show-review";

class ShowRepository {
    public getUserShows(user: string): PromiseLike<any> {
        return UserModel.findOne({ username: user }, { tvShows: 1 }).then((user: IUser) => {
            return user.tvShows.map(tvShow => tvShow.id);
        });
    }

    public addUserTvShow(user: string, tvShowId: number) {
        return UserModel.update({ username: user, "tvShows.id": { "$ne": tvShowId } },
            { $push: { "tvShows": { id: tvShowId, watchedEpisodes: [] as [any] } } });
    }

    public unfollowTvShow(user: string, tvShow: number) {
        return UserModel.update({ username: user }, { $pull: { tvShows: { id: tvShow } } });
    }

    public getShowReviews(tvMazeId: number) {
        return ShowReviewModel.find({ showId: tvMazeId });
    }

    public addUserReview(username: string, tvMazeId: number, review: string): PromiseLike<boolean> {
        return UserModel.findOne({ username }).then((user: IUser) => {
            return ShowReviewModel.create({ user, showId: tvMazeId, content: review }).then((showReview) => {
                return UserModel.update({ username }, { $push: { "showReviews": showReview } }).then((res: any) => {
                    console.log(res);
                    return true;
                }, (err: any) => {
                    console.log("Error: " + err);
                    return false;
                });
            }, (err) => {
                console.log("Error: Could not create show review!");
                console.log(err);
                return false;
            })
        }, (err: any) => {
            console.log("[Error] Trying to add user review with a user that does not exist!");
            return false;
        });
    }
}

export { ShowRepository };
