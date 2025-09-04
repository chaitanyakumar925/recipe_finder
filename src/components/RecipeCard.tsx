import React from "react";

interface RecipeCardProps {
  meal: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ meal }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{meal.strMeal}</h3>
        <a
          href={`https://www.themealdb.com/meal/${meal.idMeal}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 block"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
