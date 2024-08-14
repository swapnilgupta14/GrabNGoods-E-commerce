import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = ({ category }) => {
  const { slug, name, url } = category;

  return (
    <Link to={`/${slug}`}>
      <div className="max-w-[250px] w-full text-center shadow-md border rounded-md p-3 hover:bg-gray-100 hover:text-orange-600 duration-100 ease-linear">
        <div className="mt-2">
          <h3 className="text-lg capitalize font-medium">{name}</h3>
        </div>
      </div>
    </Link>
  );
};
