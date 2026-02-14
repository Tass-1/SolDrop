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
        
<div className='bg-[#000100] h-130 w-150 rounded-xl'>
      
      <ConnectionProvider endpoint='https://api.devnet.solana.com' >
        <WalletProvider  wallets={[]}>
          <WalletModalProvider>
              
              

            
              <div className='bg-[#0a0d10] m-2 rounded-xl pb-10 h-126'>
                  <div className='relative left-135 w-10 rounded-xl cursor-pointer' onClick={close}>
                    <Close size='h-10 w-10'/>
                  </div>

                  <div className='  rounded-xl gap-2 flex justify-center pt-2  '>
                    <WalletDisconnectButton style={{ backgroundColor:"#d0f191", borderRadius:"20px", width:"280px", textAlign:"center", height:"100px", justifyContent:"center", color:"black"}}></WalletDisconnectButton>
                    <WalletMultiButton style={{ borderRadius:"20px", width:"280px", textAlign:"center", justifyContent:"center", height:"100px"}}></WalletMultiButton>
                  </div>

                  <Airdrop></Airdrop>
              </div>
              
              
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
    </div>
    )}
    </>
  );
}





