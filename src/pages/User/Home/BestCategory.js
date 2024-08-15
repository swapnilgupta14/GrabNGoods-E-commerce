import React, { useEffect, useState } from "react";
import { CategoryLoading } from "../../../components/ui/CategorySkeleton/CategoryLoading";
import { CategoryCard } from "../../../components/user/CategoryCard";
import { ContainerHeader } from "../../../components/user/ContainerHeader";

export const BestCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
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
      setCategories(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      setIsError(true);
    }
  }

  async function fetchProductsForCategory(categorySlug) {
    try {
      setIsLoading(true);
      const response = await fetch(`https://dummyjson.com/products/category/${categorySlug}`);
      const data = await response.json();
      setProducts(data.products.slice(0, 5)); // Fetch only the first 5 products
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    const url = 'https://dummyjson.com/products/categories';
    fetchData(url);
  }, []);

  const handleCategoryClick = (categorySlug) => {
    setSelectedCategory(categorySlug);
    fetchProductsForCategory(categorySlug);
  };

  const handleSeeAllClick = () => {
    // Navigate to a page displaying all products for the selected category
    window.location.href = `/products/category/${selectedCategory}`;
  };

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
        <CategoryCard
          key={category}
          category={category}
          onClick={() => handleCategoryClick(category)}
        />
      ));
  }

  return (
    <div className="container mx-auto p-4">
      <ContainerHeader title="Best Categories!" />
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {content}
      </div>

      {selectedCategory && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            Products in {selectedCategory} Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-md shadow-sm">
                <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-medium">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleSeeAllClick}
            className="mt-6 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};
