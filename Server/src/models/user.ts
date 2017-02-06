import mongoose = require("mongoose");

interface IUser extends mongoose.Document {
    username: string;
    password: string;
    userToken: string;
};

const UserSchema: mongoose.Schema = new mongoose.Schema({
    username: String!,
    password: String!,
    userToken: String!
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export { IUser, UserSchema, UserModel };
