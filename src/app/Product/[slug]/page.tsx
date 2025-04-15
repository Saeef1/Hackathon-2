"use client";

import Products from "../../componets/products"
import Section from "./section"
import Section2 from "./section2"
import { getProductBySlug } from "../../utils/sanityQueries"
import { useState, useEffect } from "react"
import { slugsProp } from "../../interface"

type PageProps = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Product({ params }: PageProps) {
    const [data, setData] = useState<slugsProp | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProductBySlug(params.slug);
                setData(result);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [params.slug]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>ERROR: page not found</div>;
    }

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
            <Section params={{ slug: params.slug }} />
            <Section2 params={{slug : params.slug}}/>
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
}