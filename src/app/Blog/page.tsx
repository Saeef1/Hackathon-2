import Bcards from "../componets/blogCard";
import Recent from "../componets/blogRecent";
import Heading from "../componets/Title";
import Sec2 from "../Shop/sec2";
import Catagories from "./catagories";

export default function Blog() {
    return <>
        <div>
            <div className="w-[100%] flex flex-col items-center text-base text-black font-medium font-[poppins] ">
                <Heading title="Blog" logo="" />
                <div className="w-full grid sm:grid-cols-2 gap-x-10 gap-y-8 ml-[100px] pt-[106px] relative">
                    <div className="row-span-1 sm:w-[820px] w-full flex flex-col gap-[54px]">
                        <Bcards />
                    </div>
                    <Catagories />
                    <div className="col-start-2 ml-[50px] w-[393px] pt-4 h-[537px] flex flex-col items-center gap-[43px] sm:absolute top-[650px] relative">
                        <div className="w-[252px] flex flex-col gap-10">
                        <h1 className="text-[24px] leading-[36px] text-black">Recent Posts</h1>   
                        <Recent />
                        </div>
                    </div>
                </div>
                <div className="mt-[104px] mx-auto flex gap-[38px] sm:text-[20px] text-xs sm:leading-[30px] font-normal ">
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
            <Sec2 />
        </div>
    </>
}