import dotenv from "dotenv";
import mongoose from "mongoose";
import { mongooseConnect } from "./database/mongoose";
import User from "./database/models/Users";

dotenv.config();

async function createFakeUser() {
  const suffix = Date.now().toString(36);
  const emailAddress = `test+${suffix}@example.com`;
  const userName = `testuser_${suffix}`;

  try {
    const user = await User.create({
      firstName: "Test",
      lastName: "User",
      emailAddress,
      userName,
      password: "changeme",
    });
    console.log("Inserted fake user:", user.id);
  } catch (error: any) {
    if (error?.code === 11000) {
      console.warn("Skipped creating fake user: duplicate key.");
      return;
    }
    throw error;
  }
}

async function main() {
  try {
    await mongooseConnect();
    console.log("Connected to MongoDB");

    await createFakeUser();

    console.log("Hello, World!");
    console.log(`PORT: ${process.env.PORT ?? "not set"}`);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

void main();
