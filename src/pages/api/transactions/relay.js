import { Account, connect, KeyPair } from "near-api-js";
import { SCHEMA, SignedDelegate, actionCreators } from '@near-js/transactions';
import { keyStores } from "near-api-js";
import { deserialize } from 'borsh';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const serializedTxs = req.body;  // This will be an array of transactions

    // Set up connection to NEAR
    const keyStore = new keyStores.InMemoryKeyStore();
    const RELAYER_PRIVATE_KEY = process.env.RELAY_ACCOUNT_PRIVATE_KEY;
    const RELAYER_ACCOUNT_ID = "relay.betvex.testnet";

    // Add the relayer's key to the keystore
    await keyStore.setKey(
      "testnet",
      RELAYER_ACCOUNT_ID,
      KeyPair.fromString(RELAYER_PRIVATE_KEY)
    );

    const connectionConfig = {
      networkId: "testnet",
      keyStore,
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
    };

    // Connect to NEAR and get the relayer account
    const nearConnection = await connect(connectionConfig);
    const relayerAccount = await nearConnection.account(RELAYER_ACCOUNT_ID);

    // Process all transactions in the array
    const outcomes = await Promise.all(
      serializedTxs.map(async (serializedTx) => {
        const deserializedTx = deserialize(
          SCHEMA.SignedDelegate,
          Buffer.from(serializedTx)
        );

        return await relayerAccount.signAndSendTransaction({
          actions: [actionCreators.signedDelegate(deserializedTx)],
          receiverId: deserializedTx.delegateAction.senderId, // For some reason the receiverId is the web3auth user not the contract address
        });
      })
    );

    return res.status(200).json({ 
      message: 'Relayed',
      data: outcomes
    });

  } catch (error) {
    console.error('Relay transaction error:', error);
    return res.status(500).json({ 
      message: 'Failed to relay transaction', 
      error: error.message,
      stack: error.stack 
    });
  }
} 