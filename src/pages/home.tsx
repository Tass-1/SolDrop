import { Card } from "../components/Card"
import { Air } from "../components/Icons/Air"
import { Analytics } from "../components/Icons/Analytics"
import { SolIcon } from "../components/Icons/Solana"

export const Home = () => {
    return (
        <div className="bg-[#13151e] min-h-screen ">
            <div className="flex justify-between pl-20 pt-20 pr-20">
                <div className="flex-1">
                    <div className="text-white text-5xl font-semibold mb-5 tracking-tight">
                        Streamlined Solana Airdrops
                    </div>
                    <div className="text-white text-2xl font-light mb-9 leading-relaxed">
                        Send Tokens with precision and transparency 
                        <br />
                        Built for Power Users
                    </div>
                    <div>
                        <button className="bg-[#6a7ef5] px-12 py-3 rounded-xl text-xl cursor-pointer hover:bg-[#586ad4] transition-all shadow-lg shadow-blue-500/20"> 
                            Launch App 
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center items-center pr-50">
                    <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
                    
                        <SolIcon size="w-80 h-80" />

                </div>
            </div>  

            <div className="text-white pl-20 text-3xl font-semibold pt-10 pb-5">Key Features</div>
            <div className="flex px-10 gap-20 pl-30 mt-5">
                <Card text={"Effortless Airdrops"} icon={<Air size="w-15 h-15"/>} />
                <Card text={"Real-time Analytics"} icon={<Analytics size="w-15 h-15"/>} />
                <Card text={"Secure and Audited"} icon={undefined} />
            </div>

            <div className="text-white pl-20 text-3xl font-semibold pt-10 pb-5">Why Soldrop</div>
            <div className="flex px-10 gap-20 pl-30 mt-5 pb-20">
                <Card text={"Fast"} icon={undefined} />
                <Card text={"Open-Source"} icon={undefined} />
                <Card text={"Community-Driven"} icon={undefined} />
            </div>
        </div>
    )
}