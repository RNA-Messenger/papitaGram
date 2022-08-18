import React, { useState, useEffect } from "react";

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window
      .fetch("https://papitaGram-api.vercel.app/categories")
      .then((res) => res.json())
      .then((respose) => {
        setCategories(respose);
        setLoading(false);
      });
  }, []);
  return { categories, loading };
};
