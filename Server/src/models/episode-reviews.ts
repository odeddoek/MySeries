import { Document, Schema, model } from "mongoose";
import { IUser } from "./user";
import { IEpisode } from "./episode";

interface IEpisodeReview extends Document {
    user: IUser;
    tvMazeId: number;
    season: number;
    number: number;
    content: string;
};

const EpisodeReviewSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    tvMazeId: Number,
    season: Number,
    number: Number,
    content: String
});

const EpisodeReviewModel = model<IEpisode>("EpisodeReview", EpisodeReviewSchema);

export { IEpisodeReview, EpisodeReviewSchema, EpisodeReviewModel };
