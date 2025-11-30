import { HydratedDocument, Schema, model } from "mongoose";
import { randomUUID } from "crypto";
import User from "./Users";

export interface UserSession {
  sessionId: string;
  userId: string;
  startTime: Date;
  expirationTime: Date;
}

const userSessionSchema = new Schema<UserSession>({
  sessionId: { type: String, default: () => randomUUID() },
  userId: { type: String, ref: User.modelName, required: true },
  startTime: { type: Date, default: Date.now, required: true },
  expirationTime: { type: Date, required: true },
});

export type UserSessionDocument = HydratedDocument<UserSession>;

const UserSession = model<UserSession>("UserSession", userSessionSchema, "user_sessions");

export default UserSession;
