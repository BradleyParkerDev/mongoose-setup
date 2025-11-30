import mongoose from "mongoose";

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

export async function mongooseConnect(): Promise<typeof mongoose> {
  if (!process.env.ATLAS_URI) {
    throw new Error("ATLAS_URI is not defined in environment variables.");
  }

  return mongoose.connect(process.env.ATLAS_URI, {
    dbName: process.env.MONGO_DATABASE,
  });
}

export default mongoose;
