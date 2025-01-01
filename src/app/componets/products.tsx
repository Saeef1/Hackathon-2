import Link from "next/link"
import Image from "next/image"
type itemsProps = {
    id: number
    image: string
    title: string
    descrip: string
    price: string
    oldPrice?: string
    discount?: string
}

const products: itemsProps[] = [{
    id: 1,
    image: "/products/img1.png",
    title: "Syltherine",
    descrip: "Stylish cafe chair",
    price: '2.500.000',
    oldPrice: "Rp 3.500.000",
    discount: `-30%`

}, {
    id: 8,
    image: "/products/img8.png",
    title: "Leviosa",
    descrip: "Stylish cafe chair",
    price: '2.500.000',

}, {
    id: 2,
    image: "/products/img2.png",
    title: "Lolito",
    descrip: "Luxury big sofa",
    price: '7.000.000',
    oldPrice: "Rp 14.000.000",
    discount: `-50%`

}, {
    id: 3,
    image: "/products/img3.jpeg",
    title: "Respira",
    descrip: "Outdoor bar table and stool",
    price: '500.000',
    discount: `New`

}, {
    id: 4,
    image: "/products/img4.png",
    title: "Grifo",
    descrip: "Night lamp",
    price: '1.500.000',

}, {
    id: 5,
    image: "/products/img5.png",
    title: "Muggo",
    descrip: "Small mug",
    price: '150.000',
    discount: `New`

}, {
    id: 6,
    image: "/products/img6.jpeg",
    title: "Pingky",
    descrip: "Cute bed set",
    price: '7.000.000',
    oldPrice: 'Rp 14.000.000',
    discount: `-50%`

}, {
    id: 7,
    image: "/products/img7.jpeg",
    title: "Potty",
    descrip: "Minimalist flower pot",
    price: '500.000',
    discount: `New`

}]
const Products = () => {
    return <>
        {products.map((items: itemsProps) => {
            const { id, image, title, descrip, price, oldPrice, discount } = items;

            const a = discount === 'New' ? 'bg-[#2EC1AC]' : 'bg-[#E97171]';
            const hid = discount === undefined ? 'hidden' : `flex`;
            return <>
                <div key={id} className="w-[285px] h-[446px] overflow-hidden relative flex flex-col">
                    <div className="absolute hover:opacity-[1] opacity-0 hover:bg-opacity-30 bg-opacity-0 w-[285px] h-[446px] duration-300  bg-black flex flex-col items-center z-20 justify-center gap-2">
                        <Link href="/Product" className="w-[50%]"> <button className="w-[100%] py-2  bg-white">
                            Add to cart
                        </button></Link>
                        <div className="flex text-white list-none gap-5">
                            <li>share</li>
                            <li>like</li>
                        </div>
                    </div>
                    <Image
                        src={image}
                        alt="furiure"
                        width={285}
                        height={301}
                        className="w-[285px] h-[301px] object-cover overflow-hidden"
                    />
                    <div className={`rounded-full ${a} ${hid} flex justify-center py-3 top-6 right-6 absolute  size-12`}>
                        <p className="text-white">{discount}</p>
                    </div>


                    <div className="h-[145px] z-10 w-[285px] pt-4 pl-4 bg-[#F4F5F7] items-center flex flex-col">
                        <div className="w-[285px] gap-2 flex flex-col">
                            <h2 className="text-[24px] font-bold leading-[28px]">{title}</h2>
                            <p className="leading-6 text-[#898989]">{descrip}</p>

                            <div className="w-[249px] flex justify-between">
                                <p className="font-semibold text-[20px] text-[#3A3A3A] leading-[30px]">Rp {price}</p>
                                <p className="font-normal line-through text-[#B0B0B0] leading-[30px]">{oldPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        })}
    </>
};


export default Products;