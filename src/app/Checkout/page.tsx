import Details from "../componets/Info"
import Heading from "../componets/Title"
import Sec2 from "../Shop/sec2"

export default function Checkout() {
    return <>
        <div className="w-[100%] flex flex-col items-center text-base text-black font-medium font-[poppins] ">

            <Heading title={'Checkout'}
                logo={''} />

            <div className="w-[100%] h-[1829px] flex justify-center items-center">
                <div className="flex flex-wrap gap-[26px]">
                    <div className=" w-[608px] grid p-9 gap-x-9 gap-y-8 grid-cols-2 ">
                        <h1 className="col-span-2 text-4xl font-semibold ">Billing details</h1>
                        <Details title="First Name" space="col-span-1" />
                        <Details title="Last Name" space="col-span-1" />
                        <Details title="Company Name (Optional)" space="col-span-2" />
                        <Details title="Country / Region" space="col-span-2" placeHolder="Sri Lanka" />
                        <Details title="Street address" space="col-span-2" />
                        <Details title="Town / City" space="col-span-2" />
                        <Details title="Province" space="col-span-2" placeHolder="Western Province" />
                        <Details title="ZIP code" space="col-span-2" />
                        <Details title="Phone" space="col-span-2" />
                        <Details title="Email address" space="col-span-2" />
                        <Details title="" placeHolder="Additional information" space="col-span-2" />
                    </div>
                    <div className="w-[608px] h-[789px] px-9 py-[85px] mb-[22px]">
                        <div className="w-full pb-8 border-b-[#D9D9D9] border-b-[1px] grid grid-cols-2 gap-y-[24px]">
                            <h1 className="text-2xl font-medium ">Product</h1>
                            <h1 className="text-2xl font-medium text-right">Subtotal</h1>
                            <p><span className="text-[#9F9F9F] mx-[3px]">Asgaard sofa</span> x 1</p>
                            <p className="text-right">Rs. 250,000.00</p>
                            <p>Subtotal</p>
                            <p className="text-right">Rs. 250,000.00</p>
                            <p>Total</p>
                            <p className="text-2xl font-bold text-right text-[#B88E2F]">Rs. 250,000.00</p>
                        </div>
                        <div className="">
                            <form action="radio" className="text-base text-[#9F9F9F] font-medium">
                                <div className="mt-[22px]">
                                    <input
                                        type="radio"
                                        id="Transfer"
                                        name="payment"
                                        value="Transfer"
                                        className="appearance-none size-[14px] mr-4 border border-black rounded-full checked:bg-black checked:border-black " />
                                    <label htmlFor="Transfer" className="hover:text-black">Direct Bank Transfer</label><br />
                                    <label htmlFor="Transfer" >Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</label>
                                </div>
                                <div className="my-[22px]">
                                    <input
                                        type="radio"
                                        id="COD"
                                        name="payment"
                                        value="COD"
                                        className="appearance-none size-[14px] mr-4 border border-black rounded-full checked:bg-black checked:border-black " />
                                    <label htmlFor="COD" className="hover:text-black">Cash On Delivery</label><br />
                                </div>
                            </form>
                            <p className="font-normal mb-10">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold" >privacy policy</span>.</p>
                            <button className="w-[318px] mx-[20%] h-[64px] text-xl font-normal border border-black rounded-[15px]  ">
                                Place order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Sec2 />
        </div>
    </>
} 