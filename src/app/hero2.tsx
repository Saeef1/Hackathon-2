import SectionList from "./componets/section"
export default function Hero2(){
    return<>
    <div className="sm:w-[1183px] w-[100%] sm:h-[685px] h-auto items-center my-[56px] flex-col flex gap-[62px]">
        <div className=" ms:w-[580px]  sm:w-[100%] flex flex-col items-center">
            <h1 className="sm:text-[32px] text-lg sm:leading-[48px] font-bold">Browse The Range</h1>

            <p className="font-normal text-xs sm:text-[20px] text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div className="flex sm:flex-row flex-col gap-[20px]">
            <SectionList />
        </div>
    </div>
    </>
}