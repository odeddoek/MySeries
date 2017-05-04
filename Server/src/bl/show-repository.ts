import { UserModel, IUser } from "../models/user";

class ShowRepository {
    public getUserShows(user: string): PromiseLike<any> {
        return UserModel.findOne({ username: user }).then((user: IUser) => {
            return user.tvShows.map(tvShow => tvShow.id);
        });
    }

    public addUserTvShow(user: string, tvShowNumber: number) {
        return UserModel.findOne({ username: user }).then((user: IUser) => {
            if (this.isShowFollowed(user, tvShowNumber)) {
                user.tvShows.push({ id: tvShowNumber, watchedEpisodes: [] as [number] });
                return user.save();
            }
        }, (err: any) => {
            console.log("addUserTvShow failed: ", err);
        });
    }

    public unfollowTvShow(user: string, tvShow: number) {
        return UserModel.update({ username: user }, { $pull: { tvShows: { id: tvShow } } });
    }

    private isShowFollowed(user: IUser, tvShowNumber: number): boolean {
        return user.tvShows.filter((show) => show.id === tvShowNumber).length === 0;
    }
}

export { ShowRepository };
