import logopg from "../../../public/logo.png"
import shopBg from "../../../public/shop.jpeg"
import Image from "next/image"
type headProp ={
    title: string,
    logo:string
}  

const Heading = ({title, logo}:headProp)=>{
    return <>
        <div className="w-[1439px] h-[315px] overflow-hidden flex flex-col justify-center items-center">
            <Image
                src={shopBg}
                alt=""
                width={1440}
                height={316}
                className=" h-[316px] w-[1440px] -z-10 absolute  overflow-hidden blur-sm opacity-50 object-cover"
            />
            <Image
                src={logopg}
                alt="logo"
                width={50}
                height={32}
                className={ `${logo} object-none size-[77px]`}
            />
            <h1 className="text-[48px] font-medium leading-[72px]">{title}</h1>
            <div className=" w-[121px] flex justify-between ">
                <p>Home</p>
                <p className="text-[28px]">&#8250;</p>
                <p>{title}</p>
            </div>
        </div>
    </>
}   
export default Heading