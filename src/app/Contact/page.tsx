import Image from "next/image";
import Details from "../componets/Info";
import Heading from "../componets/Title";
import Sec2 from "../Shop/sec2";
const Contact = () => {
    return <>
        <div className="w-[100%] flex flex-col items-center text-base text-black font-[poppins] font-medium  ">
            <Heading
                title="Contact"
                logo=""
            />
            <div className="w-[100%] mb-[63px] h-auto pt-[98px] flex flex-col items-center">
                <h1 className="text-4xl leading-[54px] font-semibold ">Get In Touch With Us</h1>
                <p className="text-[#9F9F9F] text-center sm:w-[644px] w-[100%]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                <div className="flex flex-wrap pt-[119px] gap-[82px]">
                    <div className="w-[392px] flex flex-col gap-[42px] p-[46px]">
                        <div className="flex items-start gap-[30px]">
                            <Image
                                src="/svgs/location.svg"
                                alt=""
                                width={22}
                                height={27} />
                            <div>
                                <h1 className="text-2xl ">Address</h1>
                                <p className="">236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-[30px]">
                            <Image
                                src="/svgs/phone.svg"
                                alt=""
                                width={30}
                                height={30} />
                            <div>
                                <h1 className="text-2xl ">Phone</h1>
                                <p className="">Mobile: + &#40;8&#41; 546-6789
                                    Hotline: +&#40;84&#41; 456-6789</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-[30px]">
                            <Image
                                src="/svgs/clock.svg"
                                alt=""
                                width={23}
                                height={23} />
                            <div>
                                <h1 className="text-2xl ">Working Time</h1>
                                <p className="font-normal">Monday-Friday: 9:00 - 22:00
                                    Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[530px] w-full flex flex-col gap-9">
                        <Details
                            title="Your name"
                            placeHolder="Abc"
                        />
                        <Details
                            title="Email address"
                            placeHolder="Abc@def.com"
                        />
                        <Details
                            title="Subject"
                            placeHolder="This is an optional"
                        />
                        <div>
                            <h1 className="mb-6">Message</h1>
                            <label htmlFor="Message">                            </label>
                                <textarea
                                    id="Message"
                                    name="Message"
                                    className="rounded-[10px] py-3 px-2 text-[#9F9F9F] w-full h-[120px] border-[1px] border-[#9F9F9F] "
                                    placeholder="Hi! i&#781;d like to ask about"
                                />
                        </div>
                        <button className="w-[227px] h-[55px] text-white bg-[#B88E2F] rounded-sm">Submit</button>
                    </div>
                </div>
            </div>
            <Sec2 />
        </div>
    </>
}
export default Contact