import Image from "next/image"
export default function Section2() {
    return <>
        <div className="sm:w-[1440px] w-[100%] h-auto flex flex-col items-center py-11 gap-9 text-[#9f9f9f] border-[#d9d9d9] border-[1px]">
            <div className="sm:w-[649px] w-[100%] text-2xl gap-5 font-medium flex sm:flex-row flex-col items-center justify-between">
                <p className="hover:text-black">Description</p>
                <p className="hover:text-black">Additional Information</p>
                <p className="hover:text-black">Reviews[5]</p>
            </div>

            <div className="sm:w-[1039px] w-[100%] sm:h-[174px] h-auto flex gap-6 px-4 sm:px-0 flex-col justify-between">
                <p>
                    Embodying the raw, wayward spirit of rock &lsquon&lsquo roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>
                <p>
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </p>
            </div>
            <div className="flex items-center flex-wrap gap-[29px]">
                <div className="w-[605px] relative h-[348px] overflow-hidden bg-[#F9F1E7]">
                    <Image src="/sofa/sofa3.png" alt="sofa"
                        width={828}
                        height={651}
                        className="object-center absolute bottom-12 right-5 object-none overflow-hidden"
                    />
                </div>
                <div className="w-[605px] overflow-hidden h-[348px] relative pb-[51px] bg-[#F9F1E7]">
                    <Image src="/sofa/sofa4.png" alt="sofa"
                        width={657}
                        height={436}
                        className=" absolute object-cover bottom-[51px] overflow-hidden"
                    />
                </div>
            </div>
        </div>
    </>
};
