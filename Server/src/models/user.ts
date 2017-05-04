import { Document, Schema, model } from "mongoose";

interface IUser extends Document {
    username: string;
    password: string;
    userToken: string;
    tvShows: [{
        id: number;
        watchedEpisodes: [number];
    }];
};

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: String!,
    userToken: String!,
    tvShows: [{
        id: Number,
        watchedEpisodes: [Number]
    }]
});

const UserModel = model<IUser>("User", UserSchema);

export { IUser, UserSchema, UserModel };
