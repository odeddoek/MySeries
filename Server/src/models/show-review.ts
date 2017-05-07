import { Document, Schema, model } from "mongoose";
import { IUser } from "./user";

interface IShowReview extends Document {
    user: IUser;
    showId: number;
    content: string;
};

const ShowReviewSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    showId: Number,
    content: String
});

const ShowReviewModel = model<IShowReview>("ShowReview", ShowReviewSchema);

export { IShowReview, ShowReviewSchema, ShowReviewModel };
