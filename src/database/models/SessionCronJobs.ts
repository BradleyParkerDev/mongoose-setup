import { HydratedDocument, Schema, model } from "mongoose";
import { randomUUID } from "crypto";

export interface SessionCronJob {
  cronJobId: string;
  lastChecked: Date;
  sessionsDeleted: number;
}

const sessionCronJobSchema = new Schema<SessionCronJob>({
  cronJobId: { type: String, default: () => randomUUID() },
  lastChecked: { type: Date, required: true },
  sessionsDeleted: { type: Number, required: true },
});

export type SessionCronJobDocument = HydratedDocument<SessionCronJob>;

const SessionCronJob = model<SessionCronJob>("SessionCronJob", sessionCronJobSchema, "session_cron_jobs");

export default SessionCronJob;
