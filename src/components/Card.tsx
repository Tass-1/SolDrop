


export const Card = ({text , icon} : {
    text: string,
    icon: any
}) => {



    return (
        <div className="flex h-40 items-center ">

            <div className="h-40 bg-[#4e61c2] w-2 rounded-tl-xl rounded-bl-xl "></div>

            
            <div className="flex rounded-md bg-[#1d212a] rounded-tr-xl rounded-br-xl h-40 items-center w-90">

                <div className="pl-5"> {icon} </div>

                <div className="bg-[#1d212a]">
                    <span className="text-white text-xl font-normal pl-5"> {text} </span>
                </div>

            </div>
            
        </div>
    )
}