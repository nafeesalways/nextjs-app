"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

export default function MealsPage() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data?.meals);
    } catch (err) {
      console.error("Failed to fetch meals:", err);
      setMeals([]);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search meals..."
        className="border p-2 mb-4"
      />

      <div className="grid grid-cols-4 gap-5">
        {meals?.map((meal) => (
          <div key={meal?.idMeal} className={`border p-2 ${inter.className}`}>
            <Image src={meal.strMealThumb} width={640} height={640} alt="" />
            <p className="font-bold">{meal?.strMeal}</p>
            <p className="text-sm text-gray-600 line-clamp-3">
              {meal?.strInstructions}
            </p>
            <Link href={`/meals/${meal.idMeal}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
