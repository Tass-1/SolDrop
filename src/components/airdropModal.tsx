import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import './App.css'
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';




export function Modal() {
  

  return (
    <div className='bg-[#232a3a] h-screen w-screen'>
      <ConnectionProvider endpoint='https://api.devnet.solana.com' >
        <WalletProvider  wallets={[]}>
          <WalletModalProvider>

              <WalletDisconnectButton></WalletDisconnectButton>
              <WalletMultiButton></WalletMultiButton>
              <Airdrop></Airdrop>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}