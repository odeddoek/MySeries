import { ShowModel, IShow } from "../models/show";

class ShowRepository {
    constructor() {
        console.log("yeaa");
    }

    static bootstrap() {
        return new ShowRepository();
    }
    getUserShows(user: string):  PromiseLike<any> {
        return ShowModel.find({user: user});
    }
}


var server = ShowRepository.bootstrap();
module.exports = server;
