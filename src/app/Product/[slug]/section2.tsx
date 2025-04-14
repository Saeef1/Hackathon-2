import Image from "next/image";
import { PortableText } from "next-sanity";
import { Dynamic } from "./page";
export default async function Section2({
    params,
}: {
  params: { slug: string };
}
) {
    const data: slugsProp | null = await Dynamic(params.slug);

  if (!data) {
    return <div key="none1">ERROR: page not found</div>;
  } else {
    return <>

        <div className="sm:w-[1440px] w-[100%] h-auto flex flex-col items-center py-11 gap-9 text-[#9f9f9f] border-[#d9d9d9] border-[1px]">
            <div className="sm:w-[649px] w-[100%] sm:text-2xl text-base gap-5 font-medium flex sm:flex-row flex-col items-center justify-between">
                <p className="hover:text-black">Description</p>
                <p className="hover:text-black">Additional Information</p>
                <p className="hover:text-black">Reviews[5]</p>
            </div>

            <div className="sm:w-[1039px] w-[100%] h-auto flex gap-6 px-4 sm:px-0 flex-col justify-between">
                <PortableText value={[{ _type: 'block', children: [{ _type: 'span', text: data.description }] }]} />
            </div>
            <div className="flex items-center flex-wrap gap-[29px]">
                <div className="w-[605px] relative h-[348px] overflow-hidden bg-[#F9F1E7]">
                    <Image src="/sofa/sofa3.png" alt="sofa"
                        width={828}
                        height={651}
                        className="object-center absolute bottom-12 right-5 object-none overflow-hidden"
                    />
                </div>
                <div className="w-[605px] overflow-hidden h-[348px] relative pb-[51px] bg-[#F9F1E7]">
                    <Image src="/sofa/sofa4.png" alt="sofa"
                        width={657}
                        height={436}
                        className=" absolute object-cover bottom-[51px] overflow-hidden"
                    />
                </div>
            </div>
        </div>
    </>
}};
