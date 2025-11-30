import { randomUUID } from "crypto";
import { HydratedDocument, Schema, model } from "mongoose";

export interface SessionCronJob {
  _id: string;
  cronJobId?: string;
  lastChecked: Date;
  sessionsDeleted: number;
}

const sessionCronJobSchema = new Schema<SessionCronJob>(
  {
    _id: { type: String, default: randomUUID },
    lastChecked: { type: Date, required: true },
    sessionsDeleted: { type: Number, required: true },
  },
  { id: false }
);

sessionCronJobSchema.virtual("cronJobId").get(function (this: SessionCronJob) {
  return this._id;
});

sessionCronJobSchema.set("toJSON", { virtuals: true });
sessionCronJobSchema.set("toObject", { virtuals: true });

export type SessionCronJobDocument = HydratedDocument<SessionCronJob>;

const SessionCronJobModel = model<SessionCronJob>(
  "SessionCronJob",
  sessionCronJobSchema,
  "session_cron_jobs"
);

export default SessionCronJobModel;
