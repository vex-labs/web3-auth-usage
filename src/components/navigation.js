import { useState, useEffect } from 'react';
import { useWeb3Auth } from '@/context/Web3AuthContext';
import { useNear } from '@/context/NearContext';
import { LoginModal } from './LoginModal';
import { CreateAccountModal } from './CreateAccountModal';

export const Navigation = () => {
  const { web3auth, loginWithProvider, logout: web3authLogout, accountId, namedAccountId, setNamedAccountId } = useWeb3Auth();
  const { wallet, signedAccountId } = useNear();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClientLoaded, setIsClientLoaded] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  // Check localStorage after component mounts on client
  useEffect(() => {
    setIsClientLoaded(true);
  }, []);

  // Handle successful login
  useEffect(() => {
    if (accountId && !namedAccountId && !signedAccountId) {
      setShowCreateAccount(true);
    }
  }, [accountId, namedAccountId, signedAccountId]);

  const isLoggedIn = isClientLoaded && (
    web3auth?.connected || 
    !!signedAccountId || 
    !!localStorage.getItem('web3auth_accountId')
  );

  const displayName = signedAccountId || namedAccountId || accountId;

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
                onClick={() => setIsModalOpen(true)}
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
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginWithProvider={loginWithProvider}
      />

      <CreateAccountModal
        isOpen={showCreateAccount}
        onClose={() => setShowCreateAccount(false)}
        onAccountCreated={(newAccountId) => {
          setNamedAccountId(newAccountId);
          setShowCreateAccount(false);
        }}
      />
    </>
  );
};