import { createContext, useContext, useState } from 'react';
import { Web3Auth } from "@web3auth/modal";
import { CommonPrivateKeyProvider } from "@web3auth/base-provider";
import { WEB3AUTH_NETWORK, CHAIN_NAMESPACES } from "@web3auth/base";
import { connect, KeyPair, keyStores, utils } from "near-api-js";
import { getED25519Key } from "@web3auth/base-provider";

const Web3AuthContext = createContext({});

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.OTHER,
  chainId: "0x4e454153",
  rpcTarget: "https://test.rpc.fastnear.com",
  displayName: "Near",
  blockExplorerUrl: "https://testnet.nearblocks.io/",
  ticker: "NEAR",
  tickerName: "NEAR",
  decimals: 24,
  isTestnet: true,
};

const privateKeyProvider = new CommonPrivateKeyProvider({
  config: { chainConfig: chainConfig },
});

if (!process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID) {
  throw new Error('Please set NEXT_PUBLIC_WEB3AUTH_CLIENT_ID in your .env.local file');
}

const web3auth = new Web3Auth({
  clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider: privateKeyProvider,
});

export function Web3AuthProvider({ children }) {
  const [provider, setProvider] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountId, setAccountId] = useState(null);
  const [nearConnection, setNearConnection] = useState(null);

  const setupNearConnection = async (keyPair, newAccountId) => {
    try {
      const myKeyStore = new keyStores.InMemoryKeyStore();
      await myKeyStore.setKey("testnet", newAccountId, keyPair);
      
      const connectionConfig = {
        networkId: "testnet",
        keyStore: myKeyStore,
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
      };

      const connection = await connect(connectionConfig);
      setNearConnection(connection);
      return connection;
    } catch (error) {
      console.error("Error setting up NEAR connection:", error);
      throw error;
    }
  };

  const getNearCredentials = async (web3authProvider) => {
    try {
      const privateKey = await web3authProvider.request({ method: "private_key" });
      const privateKeyEd25519 = getED25519Key(privateKey).sk.toString("hex");
      const privateKeyEd25519Buffer = Buffer.from(privateKeyEd25519, "hex");
      const bs58encode = utils.serialize.base_encode(privateKeyEd25519Buffer);
      const keyPair = KeyPair.fromString(`ed25519:${bs58encode}`);
      
      const publicKey = keyPair.getPublicKey();
      const pk58 = publicKey.data;
      const newAccountId = Buffer.from(pk58 || []).toString("hex");
      
      // Setup NEAR connection with the new keypair
      await setupNearConnection(keyPair, newAccountId);
      setAccountId(newAccountId);
      
      return { accountId: newAccountId };
    } catch (error) {
      console.error("Error getting NEAR credentials:", error);
      throw error;
    }
  };

  const login = async () => {
    try {
      await web3auth.initModal();
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);
      setIsLoggedIn(true);
      
      await getNearCredentials(web3authProvider);
      return web3authProvider;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await web3auth.logout();
      setProvider(null);
      setIsLoggedIn(false);
      setAccountId(null);
      setNearConnection(null);
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  return (
    <Web3AuthContext.Provider value={{
      web3auth,
      provider,
      isLoggedIn,
      login,
      logout,
      accountId,
      nearConnection
    }}>
      {children}
    </Web3AuthContext.Provider>
  );
}

export function useWeb3Auth() {
  const context = useContext(Web3AuthContext);
  if (context === undefined) {
    throw new Error('useWeb3Auth must be used within a Web3AuthProvider');
  }
  return context;
} 