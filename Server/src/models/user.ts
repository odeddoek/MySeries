import { Document, Schema, model } from "mongoose";
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

    showReviews: [{ type: Schema.Types.ObjectId, ref: "ShowReview" }]
});

const UserModel = model<IUser>("User", UserSchema);

export { IUser, UserSchema, UserModel };
