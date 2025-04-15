"use client";

import Image from "next/image";
import { Dynamic } from "./page";
import QuantityHandle from "@/app/componets/quantityButton";
import { useState, useEffect } from "react";
import { slugsProp } from "@/app/interface";
import { CartItem } from "@/app/interface";


export default function Section({
  params,
}: {
  params: { slug: string };
}) {
  const [data, setData] = useState<slugsProp | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Dynamic(params.slug);
        setData(result);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  const handleAddToCart = () => {
    if (!data) return;

    setIsAddingToCart(true);
    try {
      // Get existing cart from localStorage
      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
      
      // Get current quantity from localStorage
      const quantityKey = `quantity_${data._id}`;
      const currentQuantity = parseInt(localStorage.getItem(quantityKey) || '0');
      
      if (currentQuantity === 0) {
        alert('Please select a quantity first');
        setIsAddingToCart(false);
        return;
      }

      // Check if item already exists in cart
      const existingItemIndex = existingCart.findIndex((item: CartItem) => item.id === data._id);
      if (existingItemIndex !== -1) {
        // Update quantity if item exists
        existingCart[existingItemIndex].quantity += currentQuantity;
      } else {
        // Add new item if it doesn't exist
        existingCart.push({
          id: data._id,
          name: data.title,
          price: data.price,
          quantity: currentQuantity,
          image: data.productImage
        });
      }

      // Save updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(existingCart));
      
      // Reset quantity
      localStorage.setItem(quantityKey, '0');
      
      alert('Added to cart successfully!');
      window.location.href = '/Cart';
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart. Please try again.');
    } finally {
      setIsAddingToCart(false);
    }
  };

  if (isLoading) {
    return <div className="w-full h-[830px] flex items-center justify-center">Loading...</div>;
  }

  if (!data) {
    return <div className="w-full h-[830px] flex items-center justify-center">ERROR: page not found</div>;
  } else {

    return (
      <>
        <div className="w-[100%] sm:h-[830px] h-auto pt-[35px] flex justify-center">
          <div className="w-[100%] sm:h-[730px] h-auto sm:justify-center items-center sm:items-start flex-col sm:flex-row flex gap-8">
            <div className=" sm:flex-col flex gap-8">
              <div className="w-[76px] h-auto rounded-[10px] pt-2 overflow-hidden ">
                <Image
                  src={data.productImage}
                  alt=""
                  width={83}
                  height={55}
                  className="object-cover rounded-[10px]"
                />
              </div>
              
            </div>

            <div className="flex-col sm:flex-row gap-8 flex fle-wrap items-center sm:items-start justify-center ">
              <div className="w-[423px] h-[500px] rounded-[10px] relative bg-[#F9F1E7] flex overflow-hidden items-center justify-center">
                <Image
                  src={data.productImage}
                  alt={data.slug}
                  width={481}
                  height={390}
                  objectFit="cover"
                  className=" rounded-[10px] "
                />
              </div>

              <div className="sm:w-[606px] w-[100%] h-auto flex flex-col items-center sm:items-start ">
                <h1 className="sm:text-[42px] text-2xl sm:leading-[62px]">
                  {data.title}
                </h1>
                <p className="sm:text-2xl text-xs text-[#9F9F9F]">
                  Rs. {data.price}
                </p>
                <div className=" my-4 flex gap-[6px] items-center  ">
                  <p className=" tracking-[1px] text-[#ffc700] text-[20px]">
                    ★★★★★
                  </p>

                  <div className="h-[30px] border-[1px]  mx-1 border-[#9F9F9F] "></div>

                  <p className="text-[13px] leading-5 text-[#9F9F9F] ">
                    5 Customer Review
                  </p>
                </div>
                <p className=" h-auto sm:w-[100%] w-[91%] text-[13px] font-normal leading-[20px]">
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio which boasts a clear midrange and extended
                  highs for a sound.
                </p>
                <div className="flex items-center sm:items-start flex-col my-5 gap-3 text-sm text-[#9F9F9F]">
                  <p>Size</p>

                  <div className="flex gap-3 text-[13px] leading-[30px] font-normal ">
                    <button className="w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]  ">
                      L
                    </button>
                    <button className="w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]  ">
                      XL
                    </button>
                    <button className="w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]  ">
                      XS
                    </button>
                  </div>
                  <div className="flex flex-col gap-3 text-sm text-[#9F9F9F]">
                    <p>Color</p>
                    <div className="flex gap-3">
                      <div className="size-[30px] bg-[#816DFA] rounded-full"></div>
                      <div className="size-[30px] bg-[#000000] rounded-full"></div>
                      <div className="size-[30px] bg-[#B88E2F] rounded-full"></div>
                    </div>
                  </div>
                  <div className="my-5 flex flex-row sm:gap-3 gap-1">
                    <div className="w-[123px] sm:h-[64px] h-[38px] text-black rounded-[10px] border-[#9F9F9F] border-[1px] flex items-center justify-around">
                      <QuantityHandle params={{ slug: data.slug }} />
                    </div>
                    <button 
                      onClick={handleAddToCart}
                      id="cartButton" name="cartButton" 
                      disabled={isAddingToCart}
                      className="sm:w-[215px] w-[123px] sm:h-[64px] h-[38px] text-black rounded-[15px] border-black border-[1px] hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <p className="sm:text-xl text-xs">
                        {isAddingToCart ? 'Adding...' : 'Add To Cart'}
                      </p>
                    </button>
                  </div>
                  <div className="my-10 w-[100%] h-px border-[#D9D9D9] border-[1px]"></div>
                  <div className="grid grid-cols-4 gap-x-1 gap-y-3 w-[150px] text-[#9f9f9f]">
                    <p className="col-span-2">SKU</p> : <p>SS001</p>
                    <p className="col-span-2">Category</p> : <p>{data.tags[0]}</p>
                    <p className="col-span-2">Tags</p> :{" "}
                    <p className="w-56">{data.tags}</p>
                    <p className="col-span-2">Share</p> :
                    <div className="flex gap-6 items-center">
                      <button>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.833252 2.365C0.833252 1.95877 0.994624 1.56919 1.28187 1.28195C1.56911 0.994702 1.9587 0.83333 2.36492 0.83333H17.6333C17.8346 0.833001 18.034 0.872383 18.22 0.949219C18.4061 1.02606 18.5752 1.13884 18.7176 1.28111C18.8601 1.42338 18.973 1.59235 19.0501 1.77834C19.1271 1.96433 19.1667 2.16368 19.1666 2.365V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5753 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5754 1.02653 18.4065 0.949604 18.2206C0.87268 18.0346 0.833143 17.8354 0.833252 17.6342V2.365ZM8.08992 7.82333H10.5724V9.07C10.9308 8.35333 11.8474 7.70833 13.2249 7.70833C15.8658 7.70833 16.4916 9.13583 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82333ZM3.50659 16.4925H6.17992V7.70833H3.50659V16.4917V16.4925ZM6.56242 4.84333C6.56746 5.07222 6.52673 5.29982 6.44262 5.51276C6.35851 5.7257 6.23271 5.91969 6.07261 6.08336C5.91251 6.24702 5.72133 6.37706 5.5103 6.46584C5.29926 6.55461 5.07262 6.60035 4.84367 6.60035C4.61472 6.60035 4.38808 6.55461 4.17704 6.46584C3.966 6.37706 3.77483 6.24702 3.61473 6.08336C3.45463 5.91969 3.32883 5.7257 3.24472 5.51276C3.16061 5.29982 3.11988 5.07222 3.12492 4.84333C3.13481 4.39404 3.32024 3.96649 3.64149 3.65224C3.96274 3.33798 4.39427 3.16201 4.84367 3.16201C5.29307 3.16201 5.7246 3.33798 6.04585 3.65224C6.3671 3.96649 6.55253 4.39404 6.56242 4.84333Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM16.7563 8.80713C16.7637 8.92188 16.7637 9.0415 16.7637 9.15869C16.7637 12.7427 14.0342 16.8711 9.04639 16.8711C7.5083 16.8711 6.08252 16.4243 4.88135 15.6553C5.10107 15.6797 5.31104 15.6895 5.53565 15.6895C6.80518 15.6895 7.97217 15.2598 8.90234 14.5322C7.71094 14.5078 6.70996 13.7266 6.36816 12.6523C6.78564 12.7134 7.16162 12.7134 7.59131 12.6035C6.97785 12.4789 6.42645 12.1457 6.0308 11.6606C5.63515 11.1755 5.41964 10.5684 5.4209 9.94238V9.9082C5.77979 10.1108 6.20215 10.2354 6.64404 10.2524C6.27256 10.0049 5.96792 9.66946 5.75711 9.27595C5.5463 8.88244 5.43585 8.443 5.43555 7.99658C5.43555 7.49121 5.56738 7.02979 5.8042 6.62939C6.48511 7.46762 7.33479 8.15318 8.29801 8.64152C9.26123 9.12986 10.3164 9.41004 11.395 9.46387C11.0117 7.62061 12.3887 6.12891 14.0439 6.12891C14.8252 6.12891 15.5283 6.45605 16.0239 6.9834C16.6367 6.86865 17.2227 6.63916 17.7451 6.33154C17.5425 6.95898 17.1177 7.48877 16.5537 7.82324C17.1006 7.76465 17.6279 7.61328 18.1162 7.40088C17.7476 7.94287 17.2861 8.42383 16.7563 8.80713Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
