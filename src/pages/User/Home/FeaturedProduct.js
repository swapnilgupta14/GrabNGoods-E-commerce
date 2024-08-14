import React from "react";
import { ProductCardSkeleton } from "../../../components/ui/ProductCardSkeleton";
import { ContainerHeader } from "../../../components/user/ContainerHeader";
import { ProductCard } from "../../../components/user/ProductCard";
import { useEffect, useState } from "react";
// import axios from "axios";

export const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function fetchData(url) {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.products);
      setIsLoading(false);
      setProducts(data.products);
      // return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return { error: true, message: error.message };
    }
  }

  useEffect(() => {
    const url = 'https://dummyjson.com/products';
    fetchData(url);
  }, []);

  // decide what to render
  let content;

  if (isLoading)
    content = (
      <>
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </>
    );

  if (!isLoading && isError)
    content = (
      <h3 className="uppercase font-medium text-red-600">
        Something went wrong!
      </h3>
    );

  if (!isError && !isLoading && products.length === 0)
    content = (
      <p className="text-center uppercase font-medium">No Product found!</p>
    );

  if (!isError && !isLoading && products.length > 0)
    content = products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

  return (
    <div className="container mx-auto ">
      <ContainerHeader title="Featured Products!" />
      <div className="mb-7 grid grid-cols-1 justify-center xs:justify-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5">
        {content}
      </div>
    </div>
  );
};
