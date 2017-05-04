import { UserModel, IUser } from "../models/user";

class ShowRepository {
    public getUserShows(user: string): PromiseLike<any> {
        return UserModel.findOne({ username: user }, { tvShows: 1 }).then((user: IUser) => {
            return user.tvShows.map(tvShow => tvShow.id);
        });
    }

    public addUserTvShow(user: string, tvShowNumber: number) {
        return UserModel.findOne({ username: user }).then((user: IUser) => {
            if (this.isShowFollowed(user, tvShowNumber)) {
                user.tvShows.push({ id: tvShowNumber, watchedEpisodes: [] as [any] });
                return user.save();
            }
        }, (err: any) => {
            console.log("addUserTvShow failed: ", err);
        });
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

    private isShowFollowed(user: IUser, tvShowId: number): boolean {
        return user.tvShows.filter((show) => show.id === tvShowId).length === 0;
    }
}

export { ShowRepository };
