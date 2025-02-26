import { useState, useEffect } from 'react';
import { useWeb3Auth } from '@/context/Web3AuthContext';
import { useNear } from '@/context/NearContext';
import { LoginModal } from './LoginModal';
import { CreateAccountModal } from './CreateAccountModal';

export const Navigation = () => {
  const { web3auth, loginWithProvider, logout: web3authLogout, accountId, setAccountId, keyPair } = useWeb3Auth();
  const { wallet, signedAccountId } = useNear();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false);
  const [isClientLoaded, setIsClientLoaded] = useState(false);

  // Check localStorage after component mounts on client
  useEffect(() => {
    setIsClientLoaded(true);
  }, []);

  // Modified effect to check for existing accounts before showing modal
  useEffect(() => {
    if (isClientLoaded && keyPair && !accountId && !signedAccountId) {
      // Only show create account modal if no accounts exist
      setIsCreateAccountModalOpen(true);
    } else {
      // Close the modal if any account exists
      setIsCreateAccountModalOpen(false);
    }
  }, [keyPair, accountId, signedAccountId, isClientLoaded]);

  const handleLoginWithProvider = async (provider, options) => {
    try {
      await loginWithProvider(provider, options);
      setIsLoginModalOpen(false);
      // CreateAccountModal will automatically show due to the effect above
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleAccountCreated = (newAccountId) => {
    setAccountId(newAccountId);
    setIsCreateAccountModalOpen(false);
  };

  const isLoggedIn = isClientLoaded && (
    web3auth?.connected || 
    !!signedAccountId
  );

  const displayName = signedAccountId || accountId;

  const handleLogout = async () => {
    if (web3auth?.connected) {
      await web3authLogout();
    }
    if (signedAccountId) {
      await wallet.signOut();
      localStorage.removeItem('near_signed_account_id');
    }
  };

  // Show nothing until client-side code runs
  if (!isClientLoaded) {
    return null;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className='navbar-nav pt-1'>
            {!isLoggedIn ? (
              <button 
                className="btn btn-secondary"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Log in
              </button>
            ) : (
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginWithProvider={handleLoginWithProvider}
      />

      <CreateAccountModal
        isOpen={isCreateAccountModalOpen}
        onClose={() => setIsCreateAccountModalOpen(false)}
        onAccountCreated={handleAccountCreated}
      />
    </>
  );
};