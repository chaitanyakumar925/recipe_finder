import React, { useState } from "react";

type Recipe = {
  title: string;
  time: number;
  mood: string;
  ingredients: string[];
};

const allRecipes: Recipe[] = [
  {
    title: "Chicken Curry",
    time: 50,
    mood: "comfort",
    ingredients: ["chicken", "onion", "spices"],
  },
  {
    title: "Pasta Alfredo",
    time: 25,
    mood: "happy",
    ingredients: ["pasta", "cream", "cheese"],
  },
  {
    title: "Veg Salad",
    time: 15,
    mood: "light",
    ingredients: ["lettuce", "tomato", "cucumber"],
  },
  {
    title: "Chocolate Cake",
    time: 70,
    mood: "celebration",
    ingredients: ["flour", "cocoa", "sugar"],
  },
];

function App() {
  const [ingredients, setIngredients] = useState("");
  const [mood, setMood] = useState("");
  const [time, setTime] = useState<number | "">("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      setError("");

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const inputIngredients = ingredients
        .toLowerCase()
        .split(",")
        .map((i) => i.trim())
        .filter((i) => i.length > 0);

      const filtered = allRecipes.filter((recipe) => {
        const hasIngredient =
          inputIngredients.length === 0 ||
          inputIngredients.some((ing) =>
            recipe.ingredients.includes(ing.toLowerCase())
          );

        const matchesMood = !mood || recipe.mood === mood;
        const matchesTime = !time || recipe.time <= Number(time);

        return hasIngredient && matchesMood && matchesTime;
      });

      setRecipes(filtered);
    } catch (err) {
      setError("Failed to fetch recipes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🍽 Recipe Finder</h1>

      {/* Ingredients input */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          style={{ padding: "8px", width: "300px" }}
        />
      </div>

      {/* Mood selector */}
      <div style={{ marginBottom: "10px" }}>
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">Select Mood</option>
          <option value="happy">Happy</option>
          <option value="comfort">Comfort</option>
          <option value="light">Light</option>
          <option value="celebration">Celebration</option>
        </select>
      </div>

      {/* Time input */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Max cooking time (minutes)"
          value={time}
          onChange={(e) =>
            setTime(e.target.value ? Number(e.target.value) : "")
          }
          style={{ padding: "8px", width: "200px" }}
        />
      </div>

      {/* Search button */}
      <button onClick={fetchRecipes} style={{ padding: "10px 20px" }}>
        Find Recipes
      </button>

      {/* Loading & Error messages */}
      {loading && <p>Loading recipes...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Results */}
      <div style={{ marginTop: "20px" }}>
        {recipes.length > 0
          ? recipes.map((recipe, idx) => (
              <div
                key={idx}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "8px",
                }}
              >
                <h3>{recipe.title}</h3>
                <p>Time: {recipe.time} min</p>
                <p>Mood: {recipe.mood}</p>
                <p>Ingredients: {recipe.ingredients.join(", ")}</p>
              </div>
            ))
          : !loading && <p>No recipes found. Try different inputs!</p>}
      </div>
    </div>
  );
}

export default App;
