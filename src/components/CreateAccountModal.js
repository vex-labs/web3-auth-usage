import React, { useState } from 'react';
import { KeyPair } from "near-api-js";
import { PublicKey } from "near-api-js/lib/utils";
import { KeyType } from "near-api-js/lib/utils/key_pair";
import { useWeb3Auth } from '../context/Web3AuthContext';
import { getED25519Key } from "@web3auth/base-provider";

export const CreateAccountModal = ({ isOpen, onClose, onAccountCreated }) => {
  const { provider } = useWeb3Auth();
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Get private key from Web3Auth and convert to ED25519
      const web3authPrivateKey = await provider.request({ method: "private_key" });
      const privateKeyEd25519 = getED25519Key(web3authPrivateKey).sk;

      // Get public key using the new method
      const coreKitPubKey = privateKeyEd25519;
      const publicKey = new PublicKey({ keyType: KeyType.ED25519, data: coreKitPubKey });
      console.log("publicKey", publicKey.toString());
      
      const response = await fetch('/api/auth/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          publicKey: publicKey.toString()
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create account');
      }

      const { accountId: newAccountId } = await response.json();
      onAccountCreated(newAccountId);
      onClose();
    } catch (err) {
      console.error("Error creating account:", err);
      setError(err.message || 'Failed to create account. Please try a different name.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" style={{ color: '#000000' }}>Create Your Account Name</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Choose your username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase())}
                  placeholder="Enter username"
                  pattern="[a-z0-9]+"
                  title="Only lowercase letters and numbers are allowed"
                  required
                />
                <div className="form-text">
                  Your full account will be: {username ? `${username}.users.betvex.testnet` : ''}
                </div>
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <button 
                type="submit" 
                className="btn btn-primary w-100"
                disabled={isLoading}
              >
                {isLoading ? 'Creating...' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}; 