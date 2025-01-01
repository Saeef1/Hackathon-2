import Image from "next/image"
import search from "../../../public/svgs/search.svg" 

export default function Catagories(){
    return<>
    <div className="col-start-2 row-span-1 w-[393px] h-[537px] p-[22px] ml-[50px] flex flex-col items-center gap-[43px] relative">
        <div>
        <input type="text" name="search" className="w-[311px] p-4 h-[58px] border border-[#9f9f9f] rounded-[10px] absulote" />
        <label htmlFor="search" className="absolute top-[40px] right-[50px]">
            <Image
            src={search} 
            alt="search"
            width={24}
            height={24}
             />
        </label>
        </div>
        <div className="w-[251px] text-[#9f9f9f] flex flex-col gap-[41px]">
        <h1 className="text-[24px] leading-[36px] text-black">Categories</h1>
        <div className="w-full flex justify-between">
            <p>Crafts</p>
            <p>2</p>
        </div>
        <div className="w-full flex justify-between">
            <p>Design</p>
            <p>8</p>
        </div>
        <div className="w-full flex justify-between">
            <p>Handmade</p>
            <p>7</p>
        </div>
        <div className="w-full flex justify-between">
            <p>Interior</p>
            <p>1</p>
        </div>
        <div className="w-full flex justify-between">
            <p>Wood</p>
            <p>6</p>
        </div>
    </div>
    </div>
    
    </>
}