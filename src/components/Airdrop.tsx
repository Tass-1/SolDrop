import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useRef } from "react";


export const Airdrop = () => {
    const {connection} = useConnection();
    const wallet = useWallet();
    const amount = useRef<HTMLInputElement>(null);

    const submit = async() => {
        const real_amount = Number(amount.current?.value) * LAMPORTS_PER_SOL;
        if( !wallet.publicKey){
            alert("Connect the wallet ")
        }
        else{
            await connection.requestAirdrop(wallet.publicKey , real_amount);
            alert("Airdrop")   
        }
        
    }
    return (
        <div>
            <div className="bg-[#0a0d10] m-2 rounded-xl ">
                <input className='bg-[#171e27] p-4 m-4 rounded-xl h-40 w-135 text-6xl text-[#4c5666]' type="text" placeholder="0.0" ref={amount}/>
                <div className="p-4 flex items-center justify-center">
                    <button className = 'bg-[#1F8479] cursor-pointer rounded-md p-3 w-100 h-20 text-3xl hover:scale-102 hover:bg-[#26a698] active:scale-100 transition-all duration-300 ease-out ' onClick={submit}> Airdrop</button>
                </div>
                
            </div>
            
        </div>
    )
}