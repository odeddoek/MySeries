import { Document, Schema, model } from "mongoose";

export interface IShow extends Document {
    tvMazeId: number;
    user: string;
};

export const ShowSchema: Schema = new Schema({
    tvMazeId: { type: Number, required: true },
    user: { type: String, required: true }
});

export const ShowModel = model<IShow>("Show", ShowSchema);
