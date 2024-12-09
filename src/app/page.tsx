import Header from "./header";
import Hero1 from "./hero1";
import Hero2 from "./hero2";
import Hero3 from "./hero3";
import Hero4 from "./hero4";

export default function Home(){
  return <>
  <div className="flex w-[100%] flex-col items-center font-[poppins] font-medium text-[16px] ">
    <Header />
    <Hero1 />
    <Hero2 />
    <Hero3 />
    <Hero4/>
  </div>
  </>
}