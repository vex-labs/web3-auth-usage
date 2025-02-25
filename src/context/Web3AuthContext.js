import { createContext, useContext, useState, useEffect } from 'react';
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { AuthAdapter } from "@web3auth/auth-adapter";
import { CommonPrivateKeyProvider } from "@web3auth/base-provider";
import { WEB3AUTH_NETWORK, CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";
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

// Hardcoded client ID
const WEB3AUTH_CLIENT_ID = "BIRCIM9LCVCfgVKRGDKoJ55C79fnrhiBl5pfCdLn-EpOabYsG9phL6AALWYiJNmshPBGpKRaVmSn0-f_nDd1nog";

export function Web3AuthProvider({ children }) {
  const [provider, setProvider] = useState(null);
  const [accountId, setAccountId] = useState(null);  // Initialize as null initially
  const [nearConnection, setNearConnection] = useState(null);
  const [web3auth, setWeb3auth] = useState(null);
  const [isClientLoaded, setIsClientLoaded] = useState(false);
  const [namedAccountId, setNamedAccountId] = useState(null);

  // Handle client-side initialization
  useEffect(() => {
    setIsClientLoaded(true);
    const storedAccountId = localStorage.getItem('web3auth_accountId');
    if (storedAccountId) {
      setAccountId(storedAccountId);
    }
  }, []);

  // Restore session on mount
  useEffect(() => {
    const restoreSession = async () => {
      if (!isClientLoaded) return;
      
      try {
        const storedAccountId = localStorage.getItem('web3auth_accountId');
        const storedPrivateKey = localStorage.getItem('web3auth_private_key');
        
        if (storedAccountId && storedPrivateKey && web3auth) {
          const privateKeyEd25519Buffer = Buffer.from(storedPrivateKey, "hex");
          const bs58encode = utils.serialize.base_encode(privateKeyEd25519Buffer);
          const keyPair = KeyPair.fromString(`ed25519:${bs58encode}`);
          
          await setupNearConnection(keyPair, storedAccountId);
          setAccountId(storedAccountId);
        }
      } catch (error) {
        console.error("Error restoring session:", error);
        localStorage.removeItem('web3auth_accountId');
        localStorage.removeItem('web3auth_private_key');
      }
    };

    if (web3auth) {
      restoreSession();
    }
  }, [web3auth, isClientLoaded]);

  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        const web3authInstance = new Web3AuthNoModal({
          clientId: WEB3AUTH_CLIENT_ID, // Use hardcoded client ID
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
          privateKeyProvider: privateKeyProvider,
        });

        const authAdapter = new AuthAdapter();
        web3authInstance.configureAdapter(authAdapter);

        await web3authInstance.init();
        setWeb3auth(web3authInstance);
      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
      }
    };

    initWeb3Auth();
  }, []);

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
      
      // Safely store credentials in localStorage
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('web3auth_accountId', newAccountId);
          localStorage.setItem('web3auth_private_key', privateKeyEd25519);
        } catch (error) {
          console.error('Failed to store credentials in localStorage:', error);
        }
      }
      
      await setupNearConnection(keyPair, newAccountId);
      setAccountId(newAccountId);
      return { accountId: newAccountId };
    } catch (error) {
      console.error("Error getting NEAR credentials:", error);
      throw error;
    }
  };

  const loginWithProvider = async (loginProvider, extraLoginOptions = {}) => {
    try {
      const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.AUTH, {
        loginProvider: loginProvider,
        ...extraLoginOptions
      });
      setProvider(web3authProvider);
      await getNearCredentials(web3authProvider);
      return web3authProvider;
    } catch (error) {
      console.error(`Login with ${loginProvider} failed:`, error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      if (web3auth?.connected) {
        await web3auth.logout();
        setProvider(null);
        setAccountId(null);
        setNearConnection(null);
        // Safely clear stored credentials
        if (typeof window !== 'undefined') {
          try {
            localStorage.removeItem('web3auth_accountId');
            localStorage.removeItem('web3auth_private_key');
          } catch (error) {
            console.error('Failed to clear localStorage:', error);
          }
        }
      }
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  return (
    <Web3AuthContext.Provider value={{
      web3auth,
      provider,
      accountId,
      namedAccountId,
      setNamedAccountId,
      nearConnection,
      loginWithProvider,
      logout
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