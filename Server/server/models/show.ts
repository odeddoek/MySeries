import mongoose = require("mongoose");

export interface IShow extends mongoose.Document {
    tvMazeId: number;
};

export const ShowSchema: mongoose.Schema = new mongoose.Schema({
    tvMazeId: { type: Number, required: true },
});

export const ShowModel = mongoose.model<IShow>("Show", ShowSchema);
