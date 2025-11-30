"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const Users_1 = __importDefault(require("./Users"));
const userSessionSchema = new mongoose_1.Schema({
    sessionId: { type: String, default: () => (0, crypto_1.randomUUID)() },
    userId: { type: String, ref: Users_1.default.modelName, required: true },
    startTime: { type: Date, default: Date.now, required: true },
    expirationTime: { type: Date, required: true },
});
const UserSession = (0, mongoose_1.model)("UserSession", userSessionSchema, "user_sessions");
exports.default = UserSession;
