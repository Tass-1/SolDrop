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
            <input className='bg-red-100 ' type="text" placeholder="Amount" ref={amount}/>
            <button className = 'bg-blue-200 cursor-pointer' onClick={submit}> Airdrop</button>
        </div>
    )
}