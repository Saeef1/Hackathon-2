import Products from "../componets/products"
export default function Sec() {
    return <>
        <div className="w-[1440px] h-[2051px] mt-[47px] py-4 px-24 flex flex-col items-center  gap-10">
            <div className="flex gap-[32px] flex-wrap h-[446px] overflow-hidden ">
                <Products />
            </div>
            <div className="flex gap-[32px] flex-wrap h-[446px] overflow-hidden ">
                <Products />
            </div>
            <div className="flex gap-[32px] flex-wrap h-[446px] overflow-hidden ">
                <Products />
            </div>
            <div className="flex gap-[32px] flex-wrap h-[446px] overflow-hidden ">
                <Products />
            </div>
            <div className="flex gap-[38px] text-[20px] leading-[30px] font-normal ">
                <button className="w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]  ">
                    1
                </button>
                <button className="w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]  ">
                    2
                </button>
                <button className="w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]  ">
                    3
                </button>
                <button className="w-[98px] h-[60px] rounded-[10px] bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]  ">
                    Next
                </button>

            </div>
        </div>
    </>
}