import Image from "next/image"
import imag1 from "../../public/fur/img1.png"
import imag2 from "../../public/fur/img2.png"
import imag3 from "../../public/fur/img3.png"
import imag4 from "../../public/fur/img4.png"
import imag5 from "../../public/fur/img5.png"
import imag6 from "../../public/fur/img6.png"
import imag7 from "../../public/fur/img7.png"
import imag8 from "../../public/fur/img8.png"
import imag9 from "../../public/fur/img9.png"
export default function Hero4() {
    return <>
        <div className="m-[69px] bg-[#FCF8F3] w-[1440px] flex justify-center overflow-hidden">
            <div className="w-[1799px] h-[780px] flex items-center m-[50px] justify-center relative">
                <div className="absolute -top-[45px] flex flex-col items-center gap-2">
                <h3>Share your setup with</h3>
                <h1 className="text-[40px] leading-[48px] font-bold">#FuniroFurniture</h1>
                </div>
            <Image 
            src={imag1} 
            alt="" 
            width={295}
            height={392}
            className="absolute left-[496px] "
            />
              <Image 
            src={imag2} 
            alt="" 
            width={274}
            height={482}
            className="absolute w-[274px] h-[382px] object-cover -left-[250px] top-0 "
            /><Image 
            src={imag3} 
            alt="" 
            width={374}
            height={323}
            className="absolute w-[374px] h-[323px] object-cover -left-[250px] bottom-[10px] "
            /><Image 
            src={imag4} 
            alt="" 
            width={324}
            height={392}
            className="absolute left-[136px] bottom-[120px] "
            /><Image 
            src={imag5} 
            alt="" 
            width={451}
            height={312}
            className="absolute left-[36px] w-[451px] h-[312px] overflow-hidden object-none top-[65px] "
            /><Image 
            src={imag6} 
            alt="" 
            width={290}
            height={348}
            className="absolute object-cover w-[290px] h-[348px] overflow-hidden left-[800px] top-[110px] "
            />
            <Image 
            src={imag7} 
            alt="" 
            width={178}
            height={242}
            className="absolute object-cover bottom-[46px] overflow-hidden left-[800px]  "
            /><Image 
            src={imag8} 
            alt="" 
            width={425}
            height={433}
            className="absolute w-[425px] h-[435px] object-cover top-[23px] left-[1100px] overflow-hidden   "
            /><Image 
            src={imag9} 
            alt="" 
            width={178}
            height={242}
            className="absolute w-[258px] h-[196px] object-cover bottom-[116px] overflow-hidden left-[991px]  "
            />


            </div>

        </div>
    </>
}