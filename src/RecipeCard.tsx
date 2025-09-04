import React from "react";

interface RecipeCardProps {
  title: string;
  thumbnail: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, thumbnail }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
