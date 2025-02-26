import { connect, keyStores, utils } from "near-api-js";
import { MongoClient } from "mongodb";
import dbConfig from "@/db-config";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, publicKey } = req.body;

  if (!username || !publicKey) {
    return res
      .status(400)
      .json({ message: "Username and public key are required" });
  }

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    const keyStore = new keyStores.InMemoryKeyStore();
    const PRIVATE_KEY = process.env.USERS_ACCOUNT_PRIVATE_KEY;
    const ACCOUNT_ID = "users.betvex.testnet";

    await keyStore.setKey(
      "testnet",
      ACCOUNT_ID,
      utils.KeyPair.fromString(PRIVATE_KEY),
    );

    const connectionConfig = {
      networkId: "testnet",
      keyStore,
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
    };

    const nearConnection = await connect(connectionConfig);
    const account = await nearConnection.account(ACCOUNT_ID);

    // Create the new account
    const newAccountId = `${username}.users.betvex.testnet`;

    try {
      console.log("Attempting to create account:", {
        newAccountId,
        publicKey,
        parentAccount: ACCOUNT_ID,
      });

      // Create the NEAR account
      await account.createAccount(newAccountId, publicKey, "0");

      // Connect to MongoDB and create user entry
      await client.connect();
      const db = client.db(dbConfig.dbName);
      const collection = db.collection(dbConfig.collections.users);

      // Create the user document
      const userDoc = {
        account_id: newAccountId,
        username: username,
        leaderboard_on: true,
        recommended_matches_on: true,
        public_key: publicKey,
      };

      // Insert the user into the database
      const result = await collection.insertOne(userDoc);
      console.log(`User document created with _id: ${result.insertedId}`);

      res.status(200).json({
        accountId: newAccountId,
        dbId: result.insertedId,
      });
    } catch (createError) {
      console.error("Account creation error details:", {
        error: createError.message,
        stack: createError.stack,
        type: createError.type,
        cause: createError.cause,
      });

      return res.status(400).json({
        message: "Failed to create account",
        error: createError.message,
        details: {
          accountId: newAccountId,
          publicKey,
          errorType: createError.type,
          errorCause: createError.cause,
        },
      });
    }
  } catch (error) {
    console.error("Connection setup error details:", {
      error: error.message,
      stack: error.stack,
      type: error.type,
      cause: error.cause,
    });

    res.status(500).json({
      message: "Failed to create account",
      error: error.message,
      details: {
        errorType: error.type,
        errorCause: error.cause,
        phase: "connection setup",
      },
    });
  } finally {
    await client.close();
  }
}
