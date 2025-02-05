import { useEffect, useState } from 'react';
import { useWeb3Auth } from '@/context/Web3AuthContext';

export const Navigation = () => {
  const { isLoggedIn, login, logout } = useWeb3Auth();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className='navbar-nav pt-1'>
          {!isLoggedIn ? (
            <button className="btn btn-secondary" onClick={login}>
              Login
            </button>
          ) : (
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};