import { useWeb3Auth } from '@/context/Web3AuthContext';
import { useState, useEffect } from 'react';
import { providers } from 'near-api-js';

export default function Home() {
  const { web3auth, provider, accountId, nearConnection } = useWeb3Auth();
  const [newGreeting, setNewGreeting] = useState('');
  const [currentGreeting, setCurrentGreeting] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      
      setCurrentGreeting(result);
    } catch (error) {
      console.error("Error getting greeting:", error);
      setError('Error getting greeting: ' + error.message);
    }
  };

  useEffect(() => {
    getGreeting();
  }, []);

  const handleSetGreeting = async () => {
    if (!nearConnection || !accountId) {
      setError('Please connect your wallet first');
      return;
    }

    if (!newGreeting.trim()) {
      setError('Please enter a greeting');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const account = await nearConnection.account(accountId);
      const result = await account.functionCall({
        contractId: "hello.near-examples.testnet",
        methodName: "set_greeting",
        args: {
          greeting: newGreeting
        },
        gas: 100000000000000,
        deposit: 0,
      });

      console.log("Contract call result:", result);
      setNewGreeting('');
      await getGreeting();
    } catch (error) {
      console.error("Contract call error:", error);
      setError('Error calling contract: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Hello Near</h1>
      
      {web3auth?.connected && accountId && (
        <div className="alert alert-success mt-3">
          Connected Account: {accountId}
        </div>
      )}

      <div className="mt-4">
        <h3>Update Greeting</h3>
        {!web3auth?.connected ? (
          <div className="alert alert-warning">
            Please connect your wallet to interact with the contract
          </div>
        ) : (
          <div className="card p-3">
            {currentGreeting && (
              <div className="mb-3">
                <strong>Current Greeting:</strong> {currentGreeting}
              </div>
            )}
            
            <div className="mb-3">
              <label htmlFor="greeting" className="form-label">New Greeting</label>
              <input
                type="text"
                className="form-control"
                id="greeting"
                value={newGreeting}
                onChange={(e) => setNewGreeting(e.target.value)}
                placeholder="Enter new greeting"
                disabled={isLoading}
              />
            </div>
            
            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            <button 
              className="btn btn-success"
              onClick={handleSetGreeting}
              disabled={isLoading || !newGreeting.trim()}
            >
              {isLoading ? 'Updating...' : 'Set New Greeting'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}