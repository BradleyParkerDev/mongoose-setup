import dotenv from "dotenv";
import { mongooseConnect } from "./database/mongoose";

dotenv.config();

async function main() {
  try {
    await mongooseConnect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }

  console.log("Hello, World!");
  console.log(`PORT: ${process.env.PORT ?? "not set"}`);
}

void main();
