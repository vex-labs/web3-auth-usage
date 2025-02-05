import { useEffect, useState } from 'react';

import '@/styles/globals.css';
import { Navigation } from '@/components/navigation';
import { Web3AuthProvider } from '@/context/Web3AuthContext';
import { NearProvider } from '@/context/NearContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <Web3AuthProvider>
      <NearProvider>
        <div>
          <Navigation />
          <Component {...pageProps} />
        </div>
      </NearProvider>
    </Web3AuthProvider>
  );
}
