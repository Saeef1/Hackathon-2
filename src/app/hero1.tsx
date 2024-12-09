import Image from "next/image";
export default function Hero1(){
    return<>
    <div id="hero1" className="relative h-[900.93px] w-[1440px] overflow-hidden">
        <Image 
        src="/bg1.jpeg"
        alt="hero" 
        width={1440}
        height={1007.93}
        className=" -z-10 overflow-hidden"
        />

        <div className="absolute right-[58px] flex-col flex items-center justify-center top-[153px] z-10 w-[643px] h-[443px] rounded-[10px] pb-[37px] bg-[#FFF3E3]">
            <div className="w-[561px] h-[344px] flex-col flex items-center  gap-[46px]">
                <div className="w-[] h-[]">
                    <h3 className="font-bold text-[16px] tracking-[3px] leading-[24px]">
                    New Arrival
                    </h3>
                    <h2 className="font-bold text-[52px] text-[#B88E2F] leading-[65px]">
                    Discover Our New Collection
                    </h2>
                    <p className="font-medium text-[18px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                </div>
                <div className="w-[100%]">
                <button className="w-[222px] text-[16px] font-bold h-[74px] bg-[#B88E2F] text-[#FFF3E3] py-[25px] px-[72px]">
                BUY NOW
                </button>
                </div>
            </div>
        </div>

    </div>
    </>
}