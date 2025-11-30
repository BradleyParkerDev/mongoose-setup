import { HydratedDocument, Schema, model } from "mongoose";
import { randomUUID } from "crypto";

export interface User {
  id: string;
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
    id: { type: String, default: () => randomUUID() },
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

export type UserDocument = HydratedDocument<User>;

const User = model<User>("User", userSchema, "users");

export default User;
