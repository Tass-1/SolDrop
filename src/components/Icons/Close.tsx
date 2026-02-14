


export const Close = ({size = "w-8 h-8"} : {
    size?: string
}) => {

    return(
        <div className={size}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-full h-full">
  <path stroke-linecap="round" stroke-linejoin="round"  d="M6 18 18 6M6 6l12 12" />
</svg>

        </div>
    )
}