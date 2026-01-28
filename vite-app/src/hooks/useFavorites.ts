import { useEffect, useState } from "react";

const FAVORITES_KEY = "favoritePairings";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}
