import { SolIcon } from "./Icons/Solana"

export const Header = () => {
    return (
        <nav className="w-full bg-[#1c2029] h-20 rounded-md flex items-center px-10">
            <div className="flex justify-between items-center w-full">
                
                
                <div className="flex items-center ">
                    <SolIcon size="w-10 h-10" /> 
                    <div className="flex text-2xl tracking-tight">
                        <span className="font-semibold text-[#e7e9ea]">SOLDROP</span>
                        <span className="font-normal text-[#e7e9ea]/70 ml-1">Sentinel</span>
                    </div>
                </div>

                
                <div className="flex items-center gap-15 ">
                    <a href="#" className="text-[#6779f6] text-lg hover:text-white transition-colors">Docs</a>
                    <a href="#" className="text-[#6779f6] text-lg hover:text-white transition-colors">Share</a>
                    <button className="px-5 py-2 bg-[#6779f6] text-white rounded-lg font-bold hover:bg-[#5566d6] transition-all">
                        Launch
                    </button>
                </div>

            </div>
        </nav>
    )
}