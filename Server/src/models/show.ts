import { Document, Schema, model } from "mongoose";

import { IShowReview } from "./show-review";

interface IShow extends Document {
    tvMazeId: number;
    reviews: [IShowReview]
};

const ShowSchema: Schema = new Schema({
    tvMazeId: Number,
    reviews: [{ type: Schema.Types.ObjectId, ref: "ShowReview" }]
});

const ShowModel = model<IShow>("Show", ShowSchema);

export { IShow, ShowSchema, ShowModel };
