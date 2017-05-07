import { UserModel, IUser } from "../models/user";
import { EpisodeReviewModel } from "../models/episode-reviews";

class EpisodeRepository {
    public getWatchedEpisodes(user: string, tvShowId: number) {
        return UserModel.findOne({ username: user, "tvShows.id": tvShowId }, { "tvShows.$": 1 }).then((user: IUser) => {
            return user.tvShows[0].watchedEpisodes;
        });
    }

    public markEpisodeAsWatched(user: string, tvShowId: number, season: number, episodeNumber: number) {
        return UserModel.findOneAndUpdate({ username: user, "tvShows.id": tvShowId },
            { $addToSet: { "tvShows.$.watchedEpisodes": { episodeNumber, season } } });
    }

    public getEpisodeReviews(tvMazeId: number, season: number, number: number) {
        return EpisodeReviewModel.find({ tvMazeId, season, number });
    }

    public addUserReview(username: string, tvMazeId: number, season: number, number: number, review: string): PromiseLike<boolean> {
        return UserModel.findOne({ username }).then((user: IUser) => {
            return EpisodeReviewModel.create({ user, tvMazeId, season, number, content: review }).then((episodeReview) => {
                return UserModel.update({ username }, { $push: { "episodeReviews": episodeReview } }).then((res: any) => {
                    return true;
                }, (err: any) => {
                    console.log("Error: " + err);
                    return false;
                });
            }, (err) => {
                console.log("Error: Could not create episode review!");
                console.log(err);
                return false;
            })
        }, (err: any) => {
            console.log("[Error] Trying to add user review with a user that does not exist!");
            return false;
        });
    }
}

export { EpisodeRepository };
