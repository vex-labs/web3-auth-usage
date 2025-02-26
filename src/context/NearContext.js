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
  const [isClientLoaded, setIsClientLoaded] = useState(false);

  // Handle client-side initialization
  useEffect(() => {
    setIsClientLoaded(true);
    const storedAccountId = localStorage.getItem("near_signed_account_id");
    if (storedAccountId) {
      setSignedAccountId(storedAccountId);
    }
  }, []);

  useEffect(() => {
    if (!isClientLoaded) return;

    const initWallet = async () => {
      const newWallet = new Wallet({
        createAccessKeyFor: Contract,
        networkId: NetworkId,
      });

      const accountId = await newWallet.startUp((signedAccountId) => {
        const newSignedAccountId = signedAccountId || "";
        setSignedAccountId(newSignedAccountId);
        localStorage.setItem("near_signed_account_id", newSignedAccountId);
      });

      setWallet(newWallet);
      setSignedAccountId(accountId || "");
      if (accountId) {
        localStorage.setItem("near_signed_account_id", accountId);
      }
    };

    initWallet();
  }, [isClientLoaded]);

  return (
    <NearContext.Provider value={{ wallet, signedAccountId }}>
      {children}
    </NearContext.Provider>
  );
}

export function useNear() {
  return useContext(NearContext);
}
