import React, { useState } from 'react';
import { useNear } from '../context/NearContext';
import { useWeb3Auth } from '../context/Web3AuthContext';

export const LoginModal = ({ isOpen, onClose, onLoginWithProvider }) => {
  const { wallet } = useNear();
  const { web3auth } = useWeb3Auth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  if (!isOpen) return null;
  if (!web3auth) return null;

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    try {
      await onLoginWithProvider("email_passwordless", { login_hint: email });
      onClose();
    } catch (error) {
      console.error("Email login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" style={{ color: '#000000' }}>Log in</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-4">
              <h6 className="mb-3">Social Login</h6>
              
              {/* Google Login - Large Button */}
              <button 
                className="btn btn-lg w-100 mb-3 d-flex align-items-center justify-content-center gap-2"
                onClick={() => {
                  onLoginWithProvider("google");
                  onClose();
                }}
                style={{ backgroundColor: '#ff69b4', color: 'white' }}
              >
                <i className="bi bi-google"></i>
                Continue with Google
              </button>

              {/* Social Logins Grid */}
              <div className="row g-2">
                <div className="col-6">
                  <button 
                    className="btn btn-info w-100 d-flex align-items-center justify-content-center gap-2"
                    onClick={() => {
                      onLoginWithProvider("discord");
                      onClose();
                    }}
                  >
                    <i className="bi bi-discord"></i>
                    Discord
                  </button>
                </div>
                <div className="col-6">
                  <button 
                    className="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2"
                    onClick={() => {
                      onLoginWithProvider("twitter");
                      onClose();
                    }}
                  >
                    <i className="bi bi-twitter-x"></i>
                    Twitter
                  </button>
                </div>
                <div className="col-6">
                  <button 
                    className="btn btn-danger w-100 d-flex align-items-center justify-content-center gap-2"
                    onClick={() => {
                      onLoginWithProvider("reddit");
                      onClose();
                    }}
                  >
                    <i className="bi bi-reddit"></i>
                    Reddit
                  </button>
                </div>
                <div className="col-6">
                  <button 
                    className="btn btn-purple w-100 d-flex align-items-center justify-content-center gap-2"
                    onClick={() => {
                      onLoginWithProvider("twitch");
                      onClose();
                    }}
                  >
                    <i className="bi bi-twitch"></i>
                    Twitch
                  </button>
                </div>
                <div className="col-6">
                  <button 
                    className="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2"
                    onClick={() => {
                      onLoginWithProvider("apple");
                      onClose();
                    }}
                  >
                    <i className="bi bi-apple"></i>
                    Apple
                  </button>
                </div>
                <div className="col-6">
                  <button 
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                    onClick={() => {
                      onLoginWithProvider("facebook");
                      onClose();
                    }}
                  >
                    <i className="bi bi-facebook"></i>
                    Facebook
                  </button>
                </div>
              </div>

              {/* Divider before Email Section */}
              <div className="text-center my-4">
                <div className="d-flex align-items-center">
                  <div className="border-top flex-grow-1"></div>
                  <div className="mx-3 text-muted">or</div>
                  <div className="border-top flex-grow-1"></div>
                </div>
              </div>

              {/* Email Section */}
              <h6 className="mb-3">Email Login</h6>
              <form onSubmit={handleEmailLogin} className="mt-3">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  disabled={isLoading}
                >
                  <i className="bi bi-envelope"></i>
                  {isLoading ? 'Sending...' : 'Continue with Email'}
                </button>
              </form>

              {/* Wallet Section - Kept at bottom */}
              <div className="text-center my-4">
                <div className="d-flex align-items-center">
                  <div className="border-top flex-grow-1"></div>
                  <div className="mx-3 text-muted">or</div>
                  <div className="border-top flex-grow-1"></div>
                </div>
              </div>

              <div>
                <h6 className="mb-3">Wallet Login</h6>
                <button 
                  className="btn btn-secondary btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
                  onClick={() => {
                    wallet?.signIn();
                    onClose();
                  }}
                >
                  <i className="bi bi-wallet2"></i>
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 