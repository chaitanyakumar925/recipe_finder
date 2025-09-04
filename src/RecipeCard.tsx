import React from "react";

interface RecipeCardProps {
  meal: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  };
  mood: string;
  time: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ meal, mood, time }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{meal.strMeal}</h2>
        <p className="text-sm text-gray-600">
          <strong>Mood:</strong> {mood || "Not specified"}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Time:</strong> {time ? `${time} minutes` : "Not specified"}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
