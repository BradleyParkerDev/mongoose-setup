"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const userSchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, crypto_1.randomUUID)() },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: { createdAt: "createdAt", updatedAt: "lastUpdated" },
});
const User = (0, mongoose_1.model)("User", userSchema, "users");
exports.default = User;
