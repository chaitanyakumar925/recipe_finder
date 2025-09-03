import React from "react";

interface RecipeCardProps {
  title: string;
  description: string;
  onOpen?: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  description,
  onOpen,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
      onClick={onOpen}
    >
      <h2 className="text-xl font-bold text-indigo-600 mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default RecipeCard;
