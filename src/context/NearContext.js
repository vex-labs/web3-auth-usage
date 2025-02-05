import { createContext, useState, useContext, useEffect } from "react";
import { Wallet } from "../components/near-wallet";

const Contract = "hello.near-examples.testnet";
const NetworkId = "testnet";

export const NearContext = createContext({
  wallet: undefined,
  signedAccountId: "",
});

export function NearProvider({ children }) {
  const [wallet, setWallet] = useState(null);
  const [signedAccountId, setSignedAccountId] = useState("");

  useEffect(() => {
    const initWallet = async () => {
      const newWallet = new Wallet({
        createAccessKeyFor: Contract,
        networkId: NetworkId,
      });

      const accountId = await newWallet.startUp((signedAccountId) => {
        setSignedAccountId(signedAccountId || "");
      });

      setWallet(newWallet);
      setSignedAccountId(accountId || "");
    };

    initWallet();
  }, []);

  return (
    <NearContext.Provider value={{ wallet, signedAccountId }}>
      {children}
    </NearContext.Provider>
  );
}

export function useNear() {
  return useContext(NearContext);
} 