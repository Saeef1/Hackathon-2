"use client";
import { useState, useEffect } from "react";
import { slugsProp } from "../interface";
import { getProductBySlug } from "../utils/sanityQueries";

export default function QuantityHandle({
  params = { slug: "" },
}: {
  params?: { slug?: string };
}) {
  const maxQuantity = 10;
  const [quantity, setQuantity] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<slugsProp | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (retryCount = 0) => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // Reduced timeout to 5 seconds

        try {
          const result = await getProductBySlug(params.slug || "");
          clearTimeout(timeoutId);
          setData(result);
          
          const saved = localStorage.getItem(`quantity_${result._id}`);
          if (saved && saved !== "undefined") {
            setQuantity(JSON.parse(saved));
          }
          setIsLoading(false);
        } catch (err: unknown) {
          clearTimeout(timeoutId);
          
          // Retry logic for timeout errors
          if (err instanceof Error && err.name === "AbortError" && retryCount < 2) {
            console.log(`Retrying fetch (attempt ${retryCount + 1})...`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retry
            return fetchData(retryCount + 1);
          }
          
          throw err;
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") {
          setError("Request timed out after multiple attempts. Please check your connection and try again.");
        } else {
          setError(`An error occurred while fetching data: ${err instanceof Error ? err.message : 'Unknown error'}`);
        }
        setIsLoading(false);
      }
    };

    if (params?.slug) {
      fetchData();
    } else {
      setError("Invalid slug provided.");
      setIsLoading(false);
    }
  }, [params.slug]);

  useEffect(() => {
    if (data?._id && quantity >= 0) {
      localStorage.setItem(`quantity_${data._id}`, JSON.stringify(quantity));
    }
  }, [quantity, data?._id]);

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, maxQuantity));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 0));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>ERROR: Page not found</div>;
  }

  return (
    <>
      <button onClick={handleDecrement} disabled={quantity === 0}>
        -
      </button>
      <p className="min-w-[2rem] text-center">{quantity}</p>
      <button 
        onClick={handleIncrement} 
        disabled={quantity >= maxQuantity}
      >
        +
      </button>
    </>
  );
}