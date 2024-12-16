import Image from "next/image"
import logo from "../../public/logo.png"
import acout from "../../public/svgs/acount.svg"
import search from "../../public/svgs/search.svg"
import whislidt from "../../public/svgs/whishlist.svg"
import cart from "../../public/svgs/cart.svg"
import Link from "next/link"
const Header = () => {
    return (
        <div className="sm:w-[1286px] w-[100%] mx-auto h-[100px] gap-10 flex items-center justify-between">
            <div className="w-[185px] items-center flex font-bold font-[montserrat] text-[25.2px] sm:text-[34px]  leading-[38.4px]">
                <Image
                    src={logo}
                    alt="logo"
                    width={50}
                    height={32}
                    className="object-none"
                />
                <h1>Furniro</h1>
            </div>
            <ul className=" list-none h-[22px] hidden sm:flex gap-[75px]">
                <Link href="/"><li>Home</li></Link>
                <Link href="/Shop"><li>Shop</li></Link>
                <Link href=""><li>Blog</li></Link>
                <Link href=""><li>Contact</li></Link>
            </ul>
            <div className=" sm:flex gap-[45px]">
                <button>
                    <Image 
                    src={acout}
                     alt="icom"
                                          
                     />
                </button>

                <button>
                <Image 
                    src={search}
                     alt="icom"
                     />
                </button>
                <button>
                <Image 
                    src={whislidt}
                     alt="icom"
                     />

                </button>

                <button>
                <Image 
                    src={cart}
                     alt="icom"
                     />
                </button>
            </div>
        </div>
    )
}
export default Header 