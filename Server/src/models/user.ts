import { Document, Schema, model } from "mongoose";
import { IEpisodeReview } from "./episode-reviews";
import { IShowReview } from "./show-review";

interface IUser extends Document {
    username: string;
    password: string;
    userToken: string;
    tvShows: [{
        id: number;
        watchedEpisodes:
        [
            {
                season: number;
                episodeNumber: number;
            }
        ];
    }];

    showReviews: [IShowReview];
    episodeReviews: [IEpisodeReview];
};

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: String!,
    userToken: String!,
    tvShows: [{
        _id: false,
        id: Number,
        watchedEpisodes: [
            {
                season: Number,
                episodeNumber: Number,
                _id: false
            }
        ]
    }],

    showReviews: [{ type: Schema.Types.ObjectId, ref: "ShowReview" }],
    episodeReviews: [{ type: Schema.Types.ObjectId, ref: "EpisodeReview" }]
});

const UserModel = model<IUser>("User", UserSchema);

export { IUser, UserSchema, UserModel };
