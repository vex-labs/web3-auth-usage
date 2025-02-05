import React from 'react';
import { useNear } from '../context/NearContext';

export const LoginModal = ({ isOpen, onClose, onLoginWithProvider }) => {
  const { wallet } = useNear();
  
  if (!isOpen) return null;

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Log in</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-grid gap-3">
              <button 
                className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2"
                onClick={() => {
                  onLoginWithProvider("google");
                  onClose();
                }}
              >
                <i className="bi bi-google"></i>
                Continue with Google
              </button>
              <button 
                className="btn btn-info btn-lg d-flex align-items-center justify-content-center gap-2"
                onClick={() => {
                  onLoginWithProvider("discord");
                  onClose();
                }}
              >
                <i className="bi bi-discord"></i>
                Continue with Discord
              </button>
              <button 
                className="btn btn-secondary btn-lg d-flex align-items-center justify-content-center gap-2"
                onClick={() => {
                  wallet?.signIn();
                  onClose();
                }}
              >
                <i className="bi bi-wallet2"></i>
                Log in with Wallet
              </button>
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