import SectionList from "./componets/section"
export default function Hero2(){
    return<>
    <div className="w-[1183px] h-[685px] items-center my-[56px] flex-col flex gap-[62px]">
        <div className=" w-[580px] flex flex-col items-center">
            <h1 className="text-[32px] leading-[48px] font-bold">Browse The Range</h1>

            <p className="font-normal text-[20px] text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div className="flex gap-[20px]">
            <SectionList />
        </div>
    </div>
    </>
}