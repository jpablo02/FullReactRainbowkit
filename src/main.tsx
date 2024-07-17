import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {  polygon, optimism, arbitrum, base, sepolia } from 'viem/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { MintNFT } from './MintNFT.tsx';
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'b13c283032260ebe67abb55d85a8bfd2',
  chains: [sepolia, polygon, optimism, arbitrum, base ],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
        <MintNFT address={''} />
        <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    
  </React.StrictMode>,
)
