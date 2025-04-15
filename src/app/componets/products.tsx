import Link from "next/link"
import Image from "next/image"
import { itemsProps } from "../interface"
import { getAllProducts } from "../utils/sanityQueries"

const Products = async() => {
    const products = await getAllProducts();

    return <>
        {products.map((items: itemsProps) => {
            const { _id, productImage, title, tags,slug, price,isNew, dicountPercentage } = items;
            
            const oldPrice: number | string = dicountPercentage ?  price + (price * dicountPercentage / 100) : '';
            
            const a2 = isNew ? 'bg-[#2EC1AC]' : '';
            
            const hid2 =  isNew ? 'flex' : `hidden`;
            
            const a = dicountPercentage ? 'bg-[#E97171]' : '';
            
            const hid = dicountPercentage === 0 ? 'hidden' : `flex`;
            
            const size = isNew ? 'size-12' : '';

            return <>
                <div key={_id} className="w-[285px] h-[446px] overflow-hidden relative flex flex-col hover:shadow-md duration-100">
                    <div className="absolute hover:opacity-[1] opacity-0 hover:bg-opacity-30 hover:shadow-md bg-opacity-0 w-[285px] h-[446px] duration-300  bg-black flex flex-col items-center z-20 justify-center gap-2">
                        <Link href={`/Product/${slug}`} className="w-[50%]"> <button className="w-[100%] py-2 bg-white">
                            Add to cart
                        </button></Link>
                        <div className="flex text-white list-none gap-5">
                            <li>share</li>
                            <li>like</li>
                        </div>
                    </div>
                    <Image
                        src={productImage}
                        alt="furiure"
                        width={285}
                        height={301}
                        className="w-[285px] h-[301px] object-cover overflow-hidden"
                    />
                    <div className="absolute top-6 right-6 flex gap-2" >
                    <div className={`rounded-full ${a} ${hid} flex justify-center py-3 size-12`}>
                        <p className="text-white">{dicountPercentage ? `-${dicountPercentage}%`: ``}</p>
                    </div>

                    <div className={`rounded-full ${a2} ${hid2} flex justify-center py-3 ${size}`}>
                        <p className="text-white">{isNew ? `New`: ``}</p>
                    </div>
                    </div>

                    <div className="h-[145px] z-10 w-[285px] pt-4 pl-4 bg-[#F4F5F7] items-center flex flex-col">
                        <div className="w-[285px] gap-2 flex flex-col">
                            <h2 className="text-[24px] font-bold leading-[28px]">{title}</h2>
                            <p className="leading-6 text-[#898989]">{tags}</p>

                            <div className="w-[249px] flex justify-between">
                                <p className="font-semibold text-[20px] text-[#3A3A3A] leading-[30px]">Rp {price}</p>
                                <p className="font-normal line-through text-[#B0B0B0] leading-[30px]">{oldPrice ? `Rp ${oldPrice}`:``}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        })}
    </>
};


export default Products;