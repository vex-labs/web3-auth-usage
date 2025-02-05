import { useState, useEffect } from 'react';
import { useWeb3Auth } from '@/context/Web3AuthContext';
import { useNear } from '@/context/NearContext';
import { LoginModal } from './LoginModal';

export const Navigation = () => {
  const { web3auth, loginWithProvider, logout: web3authLogout } = useWeb3Auth();
  const { wallet, signedAccountId } = useNear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLoggedIn = web3auth?.connected || !!signedAccountId;

  const handleLogout = async () => {
    if (web3auth?.connected) {
      await web3authLogout();
    }
    if (signedAccountId) {
      await wallet.signOut();
    }
  };

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
                {signedAccountId ? `Logout ${signedAccountId}` : 'Logout'}
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
    </>
  );
};