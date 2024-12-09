import Image from "next/image";
type sec = {
    id:number
    title: string
    img: string
    object: string
}
const secData: sec[] = [
    {
        id:3,
        title: `Dining`,
        img: `/assets/img1.png`,
        object: `object-left`

    }
    , {
        id:2,
        title: `Lving`,
        img: `/assets/img2.png`,
        object: `object-right`
    }, {
        id:3,
        title: `Bedroom`,
        img: `/assets/img3.png`,
        object: `object-left`
    }
]


const SectionList = () => {

    return <>
        {
            secData.map((elem: sec) => {
                const { title, img, object,id } = elem;
                return <>
                    <div key={id} className="w-[381px] flex overflow-hidden items-center gap-[30px] flex-col">
                        <Image
                            src={img} alt="living room"
                            height={521}
                            width={782.12}
                            className={`${object} w-[381px] object-cover overflow-hidden h-[480px]`}
                        />
                        <h2 className="font-semibold text-[24px]">
                            {title}
                        </h2>

                    </div>
                </>
            })
        }

    </>
}
export default SectionList