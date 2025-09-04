import React, { useState } from "react";
import RecipeCard from "./components/RecipeCard";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

function App() {
  const [ingredient, setIngredient] = useState<string>("");
  const [mood, setMood] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [recipes, setRecipes] = useState<Meal[]>([]);

  const fetchRecipes = async () => {
    if (!ingredient) return;

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();

      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">🍽 Recipe Finder</h1>

      {/* Input Section */}
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4">
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter an ingredient (e.g., chicken)"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="What's your mood? (just for display)"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="How much time do you have? (minutes)"
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={fetchRecipes}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Search Recipes
        </button>
      </div>

      {/* Recipes List */}
      <div className="max-w-3xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.length > 0 ? (
          recipes.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} mood={mood} time={time} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No recipes found. Try another ingredient.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
