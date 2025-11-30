import { randomUUID } from "crypto";
import { HydratedDocument, Schema, model } from "mongoose";
import User from "./Users";

export interface UserSession {
  _id: string;
  sessionId?: string;
  userId: string;
  startTime: Date;
  expirationTime: Date;
}

const userSessionSchema = new Schema<UserSession>(
  {
    _id: { type: String, default: randomUUID },
    userId: { type: String, ref: User.modelName, required: true },
    startTime: { type: Date, default: Date.now, required: true },
    expirationTime: { type: Date, required: true },
  },
  { id: false }
);

userSessionSchema.virtual("sessionId").get(function (this: UserSession) {
  return this._id;
});

userSessionSchema.set("toJSON", { virtuals: true });
userSessionSchema.set("toObject", { virtuals: true });

export type UserSessionDocument = HydratedDocument<UserSession>;

const UserSessionModel = model<UserSession>(
  "UserSession",
  userSessionSchema,
  "user_sessions"
);

export default UserSessionModel;
