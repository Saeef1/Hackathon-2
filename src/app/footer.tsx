import Link from "next/link";
export default function Footer() {
    return (
      <
          footer className="mb-0 w-[100%] border-black border-[1px] py-5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="font-bold text-[24px] mb-[50px] text-black">Funiro.</h3>
            <p >
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA.
            </p>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-[55px] text-gray-400">Links</h3>
            <ul className=" flex flex-col gap-[46px]">
              <li>
                <Link href="/home" className="text-black hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-black hover:text-yellow-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-yellow-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-yellow-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
  
         
          <div>
            <h3 className="font-semibold text-lg mb-[55px] text-gray-400">Help</h3>
            <ul className=" flex flex-col gap-[46px]">
              <li>
                <a href="#" className="text-black hover:text-yellow-500">
                  Payment option
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-500">
                  Return
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-500">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
  
         
          <div>
            <h3 className="font-semibold text-lg text-gray-400">Newsletter</h3>
            <form className="flex items-center mt-6">
             
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b-2 border-black text-black focus:outline-none focus:border-yellow-500 placeholder-gray-500"
                />
              </div>
             
              <button
                type="submit"
                className="ml-4 border-b-2 border-black text-black focus:border-yellow-500 hover:text-yellow-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  <hr/>
       
        <div className="text-center text-gray-500 mt-8">
          © 2024 Funiro. All rights reserved.
        </div>
      </footer>
    );
  }