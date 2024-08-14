import React, { useEffect, useState } from "react";
import { CategoryLoading } from "../../../components/ui/CategorySkeleton/CategoryLoading";
import { CategoryCard } from "../../../components/user/CategoryCard";
import { ContainerHeader } from "../../../components/user/ContainerHeader";

export const BestCategory = () => {
  const [categories, setCategories] = useState([]);
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
      console.log(data);
      setIsLoading(false);
      setCategories(data);
      // return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return { error: true, message: error.message };
    }
  }

  // Example usage

  useEffect(() => {
    const url = 'https://dummyjson.com/products/categories';
    fetchData(url);
  }, []);

  // Decide what to render
  let content;

  if (isLoading) {
    content = <CategoryLoading />;
  } else if (isError) {
    content = (
      <h3 className="uppercase container font-medium text-red-600">
        Something went wrong!
      </h3>
    );
  } else if (categories.length === 0) {
    content = (
      <p className="text-center uppercase font-medium">No categories found!</p>
    );
  } else {
    content = categories
      .slice(0, 10)
      .map((category) => (
        <CategoryCard key={category} category={category} />
      ));
  }

  return (
    <div className="container mx-auto ">
      <ContainerHeader title="Best Categories!" />
      <div className="mb-7 grid grid-cols-1 justify-center xs:justify-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-3">
        {content}
      </div>
    </div>
  );
};
