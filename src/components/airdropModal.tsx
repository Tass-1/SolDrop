import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';
import { Close } from './Icons/Close';




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
            <div className='relative left-139  w-10 rounded-xl '>
              <Close size='h-10 w-10'/>
            </div>
              
              <div className='bg-red-200 gap-6 justify-center'>
                  <WalletDisconnectButton style={{ backgroundColor:"red"}}></WalletDisconnectButton>
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





