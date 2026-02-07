


export const Card = ({text , icon} : {
    text: string,
    icon: any
}) => {



    return (
        <div className="flex h-40 ml-20 items-center ">
            <div className="h-40 bg-[#4e61c2] w-2 rounded-4xl"></div>
            <div className="flex rounded-md bg-[#1d212a] rounded-md h-40  items-center w-80">
                <div> {icon} </div>
                <div className="bg-[#1d212a]">
                <div className="text-white text-xl pl-15"> {text} </div>
                </div>
            </div>
            
        </div>
    )
}