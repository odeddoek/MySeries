import { Document, Schema, model } from "mongoose";

interface IShow extends Document {
    tvMazeId: number;
    reviews: [{ type: Schema.Types.ObjectId, ref: "ShowComment" }]
};

const ShowSchema: Schema = new Schema({
    tvMazeId: Number,
    reviews: [{ type: Schema.Types.ObjectId, ref: "ShowReview" }]
});

const ShowModel = model<IShow>("Show", ShowSchema);

export { IShow, ShowSchema, ShowModel };
