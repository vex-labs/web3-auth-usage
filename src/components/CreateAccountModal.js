import React, { useState, useEffect } from 'react';
import { useWeb3Auth } from '../context/Web3AuthContext';

export const CreateAccountModal = ({ isOpen, onClose, onAccountCreated }) => {
  const { keyPair, setupAccount, logout } = useWeb3Auth();
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  // Reset states when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsAccountCreated(false);
      setError('');
    }
  }, [isOpen]);

  const handleClose = () => {
    // Only logout if the modal is being closed without an account being created
    // and without any username entered
    if (!isAccountCreated && !username) {
      logout();
    }
    setUsername(''); // Clear the username when closing
    onClose();
  };

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const publicKey = keyPair.getPublicKey().toString();
      
      const response = await fetch('/api/auth/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.toLowerCase(),
          publicKey
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(`Failed to create account: ${data.error}${data.details ? ` (${JSON.stringify(data.details)})` : ''}`);
      }

      await setupAccount(data.accountId);
      setIsAccountCreated(true);
      onAccountCreated(data.accountId);
      onClose();
    } catch (err) {
      console.error("Error creating account:", err);
      setError(`Failed to create account: ${err.message}`);
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
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Choose your username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
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
                disabled={isLoading || !keyPair}
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