import { Document, Schema, model } from "mongoose";
import { IShow } from "./show";
import { IEpisodeReview } from "./episode-reviews";

interface IEpisode extends Document {
    showId: number;
    season: number;
    number: number;
    reviews: [IEpisodeReview];
};

const EpisodeSchema: Schema = new Schema({
    showId: Number,
    season: Number,
    number: Number,
    reviews: [{ type: Schema.Types.ObjectId, ref: "EpisodeReview" }]
});

const EpisodeModel = model<IEpisode>("Episode", EpisodeSchema);

export { IEpisode, EpisodeSchema, EpisodeModel };
