import { client } from "@/sanity/lib/client";

export const getProductBySlug = async (slug: string) => {
    const query = await client.fetch(`*[_type == "product" && slug.current == $slug][0]{  
        "slug": slug.current,
        "productImage": productImage.asset->url,
        _id,
        title,
        price,
        description,
        tags
      }`, { slug });
    return query || null;
};

export const getAllProducts = async () => {
    const query = `*[_type == "product"]{
        _id,
        "productImage": productImage.asset->url,
        title,
        dicountPercentage,
        "slug": slug.current,
        isNew,
        tags,
        price
    }`;
    return await client.fetch(query);
}; 