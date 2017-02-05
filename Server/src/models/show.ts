import mongoose = require("mongoose");

export interface IShow extends mongoose.Document {
    tvMazeId: number;
    user : string;
};

export const ShowSchema: mongoose.Schema = new mongoose.Schema({
    tvMazeId: { type: Number, required: true },
    user: { type: String, required: true }
});

export const ShowModel = mongoose.model<IShow>("Show", ShowSchema);
