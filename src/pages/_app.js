import { useEffect, useState } from 'react';

import '@/styles/globals.css';
import { Navigation } from '@/components/navigation';
import { Web3AuthProvider } from '@/context/Web3AuthContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <Web3AuthProvider>
      <div>
        <Navigation />
        <Component {...pageProps} />
      </div>
    </Web3AuthProvider>
  );
}
