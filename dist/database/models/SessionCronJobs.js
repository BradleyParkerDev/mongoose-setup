"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const sessionCronJobSchema = new mongoose_1.Schema({
    cronJobId: { type: String, default: () => (0, crypto_1.randomUUID)() },
    lastChecked: { type: Date, required: true },
    sessionsDeleted: { type: Number, required: true },
});
const SessionCronJob = (0, mongoose_1.model)("SessionCronJob", sessionCronJobSchema, "session_cron_jobs");
exports.default = SessionCronJob;
