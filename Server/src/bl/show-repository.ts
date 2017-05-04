import { UserModel, IUser } from "../models/user";

class ShowRepository {
    public getUserShows(user: string): PromiseLike<any> {
        return UserModel.findOne({ username: user }, { tvShows: 1 }).then((user: IUser) => {
            return user.tvShows.map(tvShow => tvShow.id);
        });
    }

    public addUserTvShow(user: string, tvShowId: number) {
        return UserModel.update({ username: user, 'tvShows.id': { '$ne': tvShowId } },
            { $push: { "tvShows": { id: tvShowId, watchedEpisodes: [] as [any] } } });
    }

    public getWatchedEpisodes(user: string, tvShowId: number) {
        return UserModel.findOne({ username: user, "tvShows.id": tvShowId }, { "tvShows.$": 1 }).then((user: IUser) => {
            return user.tvShows[0].watchedEpisodes;
        });
    }

    public unfollowTvShow(user: string, tvShow: number) {
        return UserModel.update({ username: user }, { $pull: { tvShows: { id: tvShow } } });
    }

    public markEpisodeAsWatched(user: string, tvShowId: number, season: number, episodeNumber: number) {
        return UserModel.findOneAndUpdate({ username: user, "tvShows.id": tvShowId },
            { $addToSet: { "tvShows.$.watchedEpisodes": { episodeNumber, season } } });
    }
}

export { ShowRepository };
