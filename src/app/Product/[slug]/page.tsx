import Products from "../../componets/products"
import Section from "./section"
import Section2 from "./section2"
import { client } from "@/sanity/lib/client"

export const Dynamic = async function (slug: string)  {
    const query: slugsProp = await client.fetch(`*[_type == "product" && slug.current == $slug][0]{  
        "slug": slug.current,
        "productImage": productImage.asset->url,
        _id,
        title,
        price,
        description,
        tags
      }`, { slug });
    return query || null;

}

export default async function Product({params} : {params: {slug: string}}) {
 
    const data:slugsProp|null =await Dynamic(params.slug) ;
    if (!data) {
        return <div>ERROR: page not found</div>
    }
    else{
    return <>

        <div key={data._id} className="flex flex-col items-center font-[poppins]">
            <div className="w-[100%] bg-[#F9F1E7] h-[100px] px-[100px] text-[16px] flex items-center justify-center  sm:justify-between">
                <div className="gap-6 flex">
                    <div className="border-black items-center flex gap-[14px]">

                        <p className=" text-[#9F9F9F]">Home</p>
                        <p className="text-[28px]">&#8250;</p>

                    </div>
                    <div className="border-black items-center flex gap-[14px]">

                        <p className=" text-[#9F9F9F]">Shop</p>
                        <p className="text-[28px]">&#8250;</p>

                    </div>
                    <div className="w-max pl-2 h-[37px] flex items-center justify-end border-l border-black">
                        {data.title}
                    </div>
                </div>
            </div>
            <Section params={{ slug: data.slug }} />
            <Section2 params={{slug : data.slug}}/>
            <div className="sm:w-[1440px] h-auto sm:h-[777px] flex flex-col items-center justify-center gap-6">
                <h1 className="font-medium text-[36px]">Related Products</h1>
                <div className="flex sm:w-[1236px] justify-center h-auto sm:h-[446px] gap-[32px] flex-wrap overflow-hidden ">
                    <Products />
                </div>
                <button className="w-[245px] h-[48px] mt-5 font-semibold text-[18px] text-[#B88E2F] flex items-center justify-center border-[#B88E2F] border-[1px]">
                    Show More
                </button>

            </div>
        </div>
    </>
    }}