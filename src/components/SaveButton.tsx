import { useState } from "react";

export function SaveButton({ recipeId }: { recipeId: string }) {
  const [saved, setSaved] = useState(false);

  return (
    <button
      onClick={() => {
        setSaved(true);
        console.log("Saved recipe:", recipeId);
      }}
      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
        saved
          ? "bg-green-600 text-white"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      {saved ? "✓ Saved to Your Recipes" : "💾 Save Recipe"}
    </button>
  );
}
