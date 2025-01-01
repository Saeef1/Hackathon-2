import Heading from "../componets/Title"
import img2 from "../../../public/sofa/sofa2.png"
import Image from "next/image"
import Sec2 from "../Shop/sec2"
import Link from "next/link"

export default function Cart() {

    return <>
        <div className="w-[100%] flex flex-col items-center sm:text-base text-[10px] font-[poppins] font-medium  ">
            <Heading
                title={`Cart`}
                logo={``} />
            <div className="w-[100%] h-auto sm:h-[526px] gap-7 flex justify-center items-center">
                <div className="flex flex-col sm:flex-row items-center sm:items-start m-5 gap-8">
                    <div className="sm:w-[817px] w-[640px] h-[215px] font-normal grid grid-cols-7  ">
                        <div className="bg-[#F9F1E7] row-start-1 col-start-1 -z-10 w-[100%] h-[55px] col-span-7"></div>
                        <p className="col-start-2 row-start-1 font-medium my-4">Product</p> <p className="col-start-3 font-medium row-start-1 my-4">Price</p>
                        <p className="col-start-5 font-medium row-start-1 my-4">Quantity</p> <p className="col-start-6 font-medium row-start-1 my-4">Subtotal</p>
                        <div className="size-[107px] hidden sm:inline-block col-start-1 mt-[55px] bg-[#f9f1e7]">
                            <Image src={img2} alt="sofa"
                                width={111}
                                height={90}
                                objectFit="cover"
                                className="mt-3 mr-2"
                            />
                        </div>
                        <p className="text-[#9F9F9F] col-start-2 mt-[95px] ">Asgaard sofa</p>  <p className="text-[#9F9F9F] mt-[95px] ">Rs. 250,000.00</p>
                        <button className=" mt-[95px] size-8 border-[1px] border-[#9F9F9F] col-start-5">1</button> <p className=" mt-[95px] ">Rs. 250,000.00</p>

                        <button className=" mt-[50px] ml-[52px]  ">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.625 4H17.125V1.8125C17.125 0.847266 16.3402 0.0625 15.375 0.0625H6.625C5.65977 0.0625 4.875 0.847266 4.875 1.8125V4H1.375C0.891016 4 0.5 4.39102 0.5 4.875V5.75C0.5 5.87031 0.598437 5.96875 0.71875 5.96875H2.37031L3.0457 20.2695C3.08945 21.202 3.86055 21.9375 4.79297 21.9375H17.207C18.1422 21.9375 18.9105 21.2047 18.9543 20.2695L19.6297 5.96875H21.2812C21.4016 5.96875 21.5 5.87031 21.5 5.75V4.875C21.5 4.39102 21.109 4 20.625 4ZM15.1562 4H6.84375V2.03125H15.1562V4Z" fill="#B88E2F" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-[393px] sm:h-[390px] h-auto pb-8 bg-[#f9f1e7] flex flex-col items-center pt-4  gap-10">
                        <h1 className="sm:text-[32px] text-[16px] font-semibold leading-6 mb-5">Cart Totals</h1>
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-[62px]">
                                <p className="">Subtotal</p>
                                <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
                            </div>
                            <div className="flex gap-[62px]">
                                <p className="">Total</p>
                                <p className="text-[20px] text-[#B88E2F] font-semibold ">Rs. 250,000.00</p>
                            </div>
                        </div>
                        <Link href="/Checkout">
                            <button className="w-[222px] text-xl h-[58px] rounded-[15px] border-black border-[1px]">
                                Check Out
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Sec2 />
        </div>
    </>
}