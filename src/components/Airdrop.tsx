import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useRef } from "react";


export const Airdrop = () => {
    const {connection} = useConnection();
    const wallet = useWallet();
    const amount = useRef<HTMLInputElement>(null);

    const submit = async() => {
        const real_amount = Number(amount.current?.value) * LAMPORTS_PER_SOL;
        await connection.requestAirdrop(wallet.publicKey , real_amount);
        alert("Airdrop")
    }
    return (
        <div>
            <div className="bg-red-500 items-center justify-center flex">
                <input className='bg-red-100 p-4 m-4 rounded-xl ' type="text" placeholder="Amount" ref={amount}/>
                <button className = 'bg-blue-200 cursor-pointer rounded-md p-3 w-35' onClick={submit}> Airdrop</button>
            </div>
            
        </div>
    )
}