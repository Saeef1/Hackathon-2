import Image from "next/image" 

interface sidesProps{
    img:string
    title:string
}  
const sides:sidesProps[] = [
    {
    img: "/Blog/img4.jpeg",
    title: "Going all-in with millennial design"
},
{
    img: "/Blog/img5.jpeg",
    title: "Exploring new ways of decorating"
},  {
    img: "/Blog/img6.jpeg",
    title: "Handmade pieces that took time to make"
},  {
    img: "/Blog/img7.jpeg",
    title: "Modern home in Milan"
},  {
    img: "/Blog/img8.jpeg",
    title: "Colorful office redesign"
}
]    

export default function Recent(){
    return<>

    {sides.map((data:sidesProps)=>{
        return<>
       <div className="w-full h-[80px] flex gap-3 items-center">
       <Image
        src={data.img} 
        alt="" 
        width={80}
        height={80}
        className="size-[80px]  object-cover rounded-[10px]"
        /> 
        <div>
            <h3 className="text-sm ">{data.title}</h3>
            <p className="text-[#9f9f9f] text-sm">03 Aug 2022</p>
        </div>
    </div>
    
        </>
    })}
     </>
}  