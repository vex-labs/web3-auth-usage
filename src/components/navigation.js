import { useState } from 'react';
import { useWeb3Auth } from '@/context/Web3AuthContext';
import { LoginModal } from './LoginModal';

export const Navigation = () => {
  const { web3auth, loginWithProvider, logout } = useWeb3Auth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className='navbar-nav pt-1'>
            {!web3auth?.connected ? (
              <button 
                className="btn btn-secondary"
                onClick={() => setIsModalOpen(true)}
              >
                Log in
              </button>
            ) : (
              <button className="btn btn-danger" onClick={logout}>
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
    </>
  );
};