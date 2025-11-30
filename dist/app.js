"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("./database/mongoose");
const Users_1 = __importDefault(require("./database/models/Users"));
dotenv_1.default.config();
function createFakeUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const suffix = Date.now().toString(36);
        const emailAddress = `test+${suffix}@example.com`;
        const userName = `testuser_${suffix}`;
        try {
            const user = yield Users_1.default.create({
                firstName: "Test",
                lastName: "User",
                emailAddress,
                userName,
                password: "changeme",
            });
            console.log("Inserted fake user:", user.id);
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.code) === 11000) {
                console.warn("Skipped creating fake user: duplicate key.");
                return;
            }
            throw error;
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            yield (0, mongoose_2.mongooseConnect)();
            console.log("Connected to MongoDB");
            yield createFakeUser();
            console.log("Hello, World!");
            console.log(`PORT: ${(_a = process.env.PORT) !== null && _a !== void 0 ? _a : "not set"}`);
        }
        catch (error) {
            console.error("Failed to connect to MongoDB", error);
            process.exit(1);
        }
        finally {
            yield mongoose_1.default.disconnect();
            console.log("Disconnected from MongoDB");
        }
    });
}
void main();
