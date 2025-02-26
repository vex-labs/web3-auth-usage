import { MongoClient } from "mongodb";
import dbConfig from "@/db-config";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { accountId } = req.body;

  if (!accountId) {
    return res.status(400).json({ message: "Account ID is required" });
  }

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const db = client.db(dbConfig.dbName);
    const collection = db.collection(dbConfig.collections.users);

    // Check if user already exists
    const existingUser = await collection.findOne({ account_id: accountId });
    if (existingUser) {
      return res.status(200).json({ message: "User already exists" });
    }

    // Create the user document
    const userDoc = {
      account_id: accountId,
      username: accountId, // Username is same as account ID for wallet users
      leaderboard_on: true,
      recommended_matches_on: true,
    };

    // Insert the user into the database
    const result = await collection.insertOne(userDoc);
    console.log(`Wallet user document created with _id: ${result.insertedId}`);

    res.status(200).json({
      accountId,
      dbId: result.insertedId,
    });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({
      message: "Error creating wallet user",
      error: error.message,
    });
  } finally {
    await client.close();
  }
}
