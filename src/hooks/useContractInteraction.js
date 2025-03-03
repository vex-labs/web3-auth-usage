import { useWeb3Auth } from "@/context/Web3AuthContext";
import { useNear } from "@/context/NearContext";
import { providers } from "near-api-js";
import { actionCreators, encodeSignedDelegate } from "@near-js/transactions";

export function useContractInteraction() {
  const {
    web3auth,
    nearConnection,
    accountId: web3authAccountId,
  } = useWeb3Auth();
  const { wallet, signedAccountId } = useNear();

  const getGreeting = async () => {
    try {
      const viewContract = async ({ contractId, methodName, args = {} }) => {
        const url = `https://rpc.testnet.near.org`;
        const provider = new providers.JsonRpcProvider({ url });

        const argsBase64 = args
          ? Buffer.from(JSON.stringify(args)).toString("base64")
          : "";

        const viewCallResult = await provider.query({
          request_type: "call_function",
          account_id: contractId,
          method_name: methodName,
          args_base64: argsBase64,
          finality: "optimistic",
        });

        return JSON.parse(Buffer.from(viewCallResult.result).toString());
      };

      const result = await viewContract({
        contractId: "hello.near-examples.testnet",
        methodName: "get_greeting",
      });

      return result;
    } catch (error) {
      console.error("Error getting greeting:", error);
      throw error;
    }
  };

  const setGreeting = async (newGreeting) => {
    if (!newGreeting?.trim()) {
      throw new Error("Please enter a greeting");
    }

    // If using Web3Auth
    if (web3auth?.connected) {
      const account = await nearConnection.account(web3authAccountId);
      const action = actionCreators.functionCall(
        "set_greeting",
        { greeting: newGreeting },
        3000000000000n,  // Using BigInt like the working example
        "0"
      );

      const signedDelegate = await account.signedDelegate({
        actions: [action],
        blockHeightTtl: 120,
        receiverId: "hello.near-examples.testnet",
      });

      // Convert the signed delegate to array format like the working example
      const encodedDelegate = Array.from(encodeSignedDelegate(signedDelegate));

      // Send the signed delegate to our relay API
      const response = await fetch('/api/transactions/relay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([encodedDelegate]),  // Send as array of transactions
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to relay transaction');
      }

      const { data } = await response.json();
      return data[0]; // Return first transaction outcome
    }

    // If using NEAR Wallet
    if (signedAccountId && wallet) {
      return wallet.callMethod({
        contractId: "hello.near-examples.testnet",
        method: "set_greeting",
        args: {
          greeting: newGreeting,
        },
      });
    }

    throw new Error("Please connect your wallet first");
  };

  return {
    getGreeting,
    setGreeting,
    isLoggedIn: web3auth?.connected || !!signedAccountId,
    currentAccountId: signedAccountId || web3authAccountId,
  };
}
