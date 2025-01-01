import Image from "next/image"
import logo from "../../public/logo.png"
import acout from "../../public/svgs/acount.svg"
import search from "../../public/svgs/search.svg"
import whislidt from "../../public/svgs/whishlist.svg"
import cart from "../../public/svgs/cart.svg"
import Link from "next/link" 

const Header = () => {
    return (
        <div className="sm:w-[1286px] w-[100%] mx-auto my-5 sm:my-0 h-auto sm:h-[100px] gap-10 flex sm:flex-row flex-col items-center sm:justify-between">
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
            <ul className=" list-none sm:h-[22px] h-auto flex-wrap items-center justify-center flex gap-[75px]">
                <Link href="/"><li>Home</li></Link>
                <Link href="/Shop"><li>Shop</li></Link>
                <Link href="/Blog"><li>Blog</li></Link>
                <Link href="/Contact"><li>Contact</li></Link>
            </ul>
            <div className=" flex gap-[45px]">
                <button>
                    <Image
                        src={acout}
                        alt="icom"
                        width={24}
                        height={20}
                    />
                </button>

                <button>
                    <Image
                        src={search}
                        alt="icom"
                        width={25}
                        height={25}
                    />
                </button>
                <button>
                    <Image
                        src={whislidt}
                        alt="icom"
                        width={26}
                        height={24}
                        />
                </button>

                <button>
                    <Link href="/Cart"><Image
                        src={cart}
                        alt="icom"
                    /></Link>
                </button>
            </div>
        </div>
    )
}
export default Header ;