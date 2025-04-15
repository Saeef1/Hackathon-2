interface slugsProp {
    _id:string
    slug: string
    productImage: string
    title:string
    price:number
    description:string
    tags:string[]
}

interface itemsProps {
    _id: string
    slug: string
    productImage: string
    title: string
    tags: string[]
    price: number
    dicountPercentage?: number
    isNew?: boolean

}
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }
  