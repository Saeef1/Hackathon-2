"use client";
import Heading from "../componets/Title";
import Sec2 from "../Shop/sec2";
import { useState, useEffect } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Get cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(existingCart);
  }, []);

  const handleRemoveItem = (itemId: string) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <>
      <div className="w-[100%] flex flex-col items-center sm:text-base text-[10px] font-[poppins] font-medium">
        <Heading title={`Cart`} logo={``} />
        <div className="w-[100%] h-auto sm:h-[526px] gap-7 flex justify-center items-center">
          <div className="flex flex-col sm:flex-row items-center sm:items-start m-5 gap-8">
            <div className="sm:w-[817px] w-[640px] h-auto font-normal">
              {/* Header */}
              <div className="grid grid-cols-7 gap-4 items-center w-full">
                <div className="bg-[#F9F1E7] col-span-7 h-[55px] -z-10"></div>
                <p className="col-start-1 font-medium my-4">Product</p>
                <p className="col-start-2 font-medium my-4">Price</p>
                <p className="col-start-4 font-medium my-4">Quantity</p>
                <p className="col-start-5 font-medium my-4">Subtotal</p>
                <p className="col-start-6 font-medium my-4">Remove</p>
              </div>
              
              {/* Cart Items */}
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-7 gap-4 items-center w-full py-4 border-b">
                  <div className="col-span-1 flex items-center">
                    <div className="size-[107px] bg-[#f9f1e7]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <p className="col-span-1 text-[#9F9F9F]">{item.name}</p>
                  <p className="col-span-1 text-[#9F9F9F]">Rs. {item.price}</p>
                  <p className="col-span-1">{item.quantity}</p>
                  <p className="col-span-1">Rs. {calculateSubtotal(item.price, item.quantity)}</p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="col-span-1"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
            <div className="w-[393px] sm:h-[390px] h-auto pb-8 bg-[#f9f1e7] flex flex-col items-center pt-4 gap-10">
              <h1 className="sm:text-[32px] text-[16px] font-semibold leading-6 mb-5">
                Cart Totals
              </h1>
              <div className="flex flex-col gap-8">
                <div className="flex gap-[62px]">
                  <p className="">Subtotal</p>
                  <p className="text-[#9F9F9F]">Rs. {calculateTotal()}</p>
                </div>
                <div className="flex gap-[62px]">
                  <p className="">Total</p>
                  <p className="text-[20px] text-[#B88E2F] font-semibold ">
                    Rs. {calculateTotal()}
                  </p>
                </div>
              </div>
              <button className="w-[80%] h-[64px] border border-black rounded-[15px] hover:bg-black hover:text-white transition-colors duration-300">
                Check Out
              </button>
            </div>
          </div>
        </div>
        <Sec2 />
      </div>
    </>
  );
}
