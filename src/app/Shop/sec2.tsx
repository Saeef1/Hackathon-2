import Image from "next/image"
export default function Sec2() {

    return <>
        <div className="w-[100%] sm:py-[100px] py-[60px] bg-[#FAF3EA] flex justify-center">
            <div className="w-[1334px] h-auto gap-5 flex flex-wrap justify-center sm:justify-between">
                <div className="flex gap-1">
                    <Image src="/svgs/trophy.svg" alt=""
                        width={52}
                        height={60}
                    />
                    <div>
                        <h1 className="sm:text-2xl text-base sm:leading-[37.5px] font-semibold">High Quality</h1>

                        <p className="sm:text-xl text-base font-medium text-[#898989]">crafted from top materials</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    <Image src="/svgs/tick.svg" alt=""
                        width={52}
                        height={60}

                    />
                    <div>
                        <h1 className="sm:text-2xl text-base sm:leading-[37.5px] font-semibold">Warranty Protection</h1>

                        <p className="sm:text-xl text-base font-medium text-[#898989]">Over 2 years</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    <Image src="/svgs/shipping.svg" alt=""
                        width={52}
                        height={60}
                    />
                    <div>
                        <h1 className="sm:text-2xl text-base sm:leading-[37.5px] font-semibold">Free Shipping</h1>

                        <p className="sm:text-xl text-base font-medium text-[#898989]">Order over 150 $</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    <Image src="/svgs/support.svg" alt=""
                        width={52}
                        height={60}
                    />
                    <div>
                        <h1 className="sm:text-2xl text-base sm:leading-[37.5px] font-semibold">24 / 7 Support</h1>

                        <p className="sm:text-xl text-base font-medium text-[#898989]">Dedicated support</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}