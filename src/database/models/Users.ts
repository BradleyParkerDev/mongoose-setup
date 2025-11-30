import { randomUUID } from "crypto";
import { HydratedDocument, Schema, model } from "mongoose";

export interface User {
  _id: string;
  userId?: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  userName: string;
  password: string;
  lastUpdated: Date;
  createdAt: Date;
}

const userSchema = new Schema<User>(
  {
    _id: { type: String, default: randomUUID },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "lastUpdated" },
  }
);

// Keep a `userId` virtual for parity with the original schema shape.
userSchema.virtual("userId").get(function (this: User) {
  return this._id;
});

userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });

export type UserDocument = HydratedDocument<User>;

const UserModel = model<User>("User", userSchema, "users");

export default UserModel;
