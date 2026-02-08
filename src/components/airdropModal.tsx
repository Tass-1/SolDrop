import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';




export function Modal({open , close} : {
  open?: boolean,
  close?: VoidFunction
}) {
  

  return (
    <>
    {open && (<div className='w-screen h-screen flex items-center fixed inset-0 justify-center bg-[#13171e]/60 backdrop-blur-md z-50'>
        
<div className='bg-[#13171e] h-80 w-80'>
      <button className='bg-red-200' onClick={close}>Click me </button>
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
    </div>
    )}
    </>
  );
}





