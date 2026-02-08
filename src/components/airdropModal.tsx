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
        
<div className='bg-[#1c202a] h-100 w-150 rounded-xl'>
      
      <ConnectionProvider endpoint='https://api.devnet.solana.com' >
        <WalletProvider  wallets={[]}>
          <WalletModalProvider>
              <button className='bg-red-200' onClick={close}>Click me </button>

              <div>
                  <WalletDisconnectButton></WalletDisconnectButton>
                  <WalletMultiButton></WalletMultiButton>
              </div>
              
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





