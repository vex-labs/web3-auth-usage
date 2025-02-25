import { connect, keyStores, utils } from "near-api-js";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, publicKey } = req.body;

  if (!username || !publicKey) {
    return res.status(400).json({ message: 'Username and public key are required' });
  }

  try {
    // Validate username format
    if (!/^[a-z0-9]+$/.test(username)) {
      return res.status(400).json({ message: 'Username can only contain lowercase letters and numbers' });
    }

    const keyStore = new keyStores.InMemoryKeyStore();
    const PRIVATE_KEY = process.env.USERS_ACCOUNT_PRIVATE_KEY;
    const ACCOUNT_ID = "users.betvex.testnet";
    
    await keyStore.setKey("testnet", ACCOUNT_ID, utils.KeyPair.fromString(PRIVATE_KEY));

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
      await account.createAccount(
        newAccountId,
        publicKey, // This should now be a proper public key string
        "0" // Initial balance of 0 NEAR
      );
      
      res.status(200).json({ accountId: newAccountId });
    } catch (createError) {
      console.error("Account creation error:", createError);
      if (createError.message.includes("already exists")) {
        return res.status(400).json({ message: 'This username is already taken' });
      }
      throw createError;
    }
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).json({ 
      message: error.message || 'Failed to create account',
      error: error.toString()
    });
  }
} 