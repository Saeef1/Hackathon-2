import Image from "next/image";
interface bCardProps{
    Img:string,
    Title:string,
    tags:string
    id:number
} 

const content : bCardProps[]=[{
    Img:"/Blog/img1.jpeg",
    Title:"Going all-in with millennial design",
    tags:"Wood",
    id:415
},{
    Img:"/Blog/img2.jpeg",
    Title:"Exploring new ways of decorating",
    tags:"Handmade",
    id:416
},{
    Img:"/Blog/img3.jpeg",
    Title:"Handmade pieces that took time to make",
    tags:"Wood",
    id:417
}]  
export default function Bcards() { 
    return <>
        {content.map((data:bCardProps)=>{
            return <>
            <div key={data.id} className="sm:w-[817px] w-full flex flex-col gap-3 h-auto">
            <div className="sm:w-[817px] w-full sm:h-[500px] h-auto rounded-[10px] overflow-hidden ">
                <Image
                    src={data.Img}
                    alt=""
                    width={817}
                    height={500}
                    className="object-cover"
                />
            </div>
            <div className="flex gap-[35px]">
                <span className="flex gap-2 " >
                    <Image
                        src="/svgs/Admin.svg"
                        alt="admin"
                        width={14}
                        height={16}
                    />
                    <p className="text-[#9F9F9F]">Admin</p>
                </span>
                <span className="flex gap-2" >
                    <Image
                        src="/svgs/calander.svg"
                        alt="admin"
                        width={14}
                        height={16}
                    />
                    <p className="text-[#9F9F9F]">14 Oct 2022</p>
                </span>
                <span className="flex gap-2 " >
                    <Image
                        src="/svgs/tag.svg"
                        alt="admin"
                        width={14}
                        height={16}
                    />
                    <p className="text-[#9F9F9F]">{data.tags}</p>
                </span>
            </div>
            <h1 className="text-3xl leading-[45px]">{data.Title}</h1>
            <p className="text-[#9f9f9f] w-[100%] sm:w-[817px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

            <button className="w-[89px] h-[36px] border-b-2 border-black mt-3 ">Read more</button>
        </div>
            </> 
        })}
    </>
}