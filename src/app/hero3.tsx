import Image from "next/image"
import imge1 from "../../public/rooms/img1.png"
import imge2 from "../../public/rooms/img2.png"
import imge3 from "../../public/rooms/img3.png"
import Products from "./componets/products"
export default function Hero3() {
    return <>
        <div className="w-[1236px] flex flex-col items-center gap-[32px]">
            <h1 className="text-[40px] leading-[48px] font-bold">Our Products</h1>
            <div className="w-[1236px] mb-8 flex flex-wrap gap-8">
                <Products />
            </div>
            <button className="w-[245px] h-[48px] font-semibold text-[18px] text-[#B88E2F] flex items-center justify-center border-[#B88E2F] border-[1px]">
                Show More
            </button>
        </div>
        <div className="m-[69px] bg-[#FCF8F3] w-[1440px] overflow-hidden">
            <div className="w-[1780px] h-[670px] relative">
                <div className="w-[422px] absolute left-[100px] top-[223px]">
                    <h1 className="text-[40px] font-bold leading-[48px]">
                        50+ Beautiful rooms
                        inspiration
                    </h1>
                    <p className="mt-[7px] mb-[27px] text-[#616161] ">
                        Our designer already made a lot of beautiful prototipe of rooms that inspire you
                    </p>
                    <button className="w-[175px] h-[48px] font-semibold text-[16px] text-white flex items-center justify-center bg-[#B88E2F]">Explore More</button>
                </div>
                <div className="w-[1196px] h-[582px] my-[44px] flex gap-6 right-px absolute">
                    <Image
                        src={imge1}
                        alt="rooms"
                        width={404}
                        height={582}
                        className=""
                    />
                    <Image
                        src={imge2}
                        alt="rooms"
                        width={404}
                        height={486}
                        className="w-[604px] h-[486px] overflow-hidden object-cover"
                    />
                    <Image
                        src={imge3}
                        alt="rooms"
                        width={404}
                        height={486}
                        className="w-[604px] h-[486px] overflow-hidden object-cover"
                    />

                    <div className="w-[217px] z-10 h-[130px] absolute bg-white bg-opacity-70 flex flex-col items-center justify-center gap-2 left-[38px] bottom-[28px]">

                        <div className="flex items-center">
                            <h3>01</h3>
                            <span className="w-[27px] h-px border-[1px] border-black mx-1"></span>
                            <h3>Bed Room</h3>
                        </div>
                        <h1 className="text-[28px] font-semibold">Inner Peace</h1>

                    </div>

                    <div className="absolute left-[256px] bottom-[28px] size-12 bg-[#B88E2F] flex items-center justify-center">
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 7H1M19 7L13 1M19 7L13 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className="w-[120px] absolute right-[656px] z-10 bottom-[28px] flex gap-5">
                        <div className="size-[11px] bg-[#D8D8D8] rounded-full"></div>
                        <div className="size-[11px] bg-[#D8D8D8] rounded-full"></div>
                        <div className="size-[11px] bg-[#D8D8D8] rounded-full"></div>
                        <div className="size-[11px] bg-[#D8D8D8] rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
} 