import { ShowModel, IShow } from "../models/show";

class ShowRepository {
    getUserShows(user: string):  PromiseLike<any> {
        return ShowModel.find({user: user});
    }
}

export { ShowRepository };
