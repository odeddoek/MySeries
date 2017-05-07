import { UserModel, IUser } from "../models/user";

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
}

export { EpisodeRepository };
