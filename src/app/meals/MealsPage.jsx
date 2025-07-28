import React from 'react'
import MealsPage from './page'
import dynamic from 'next/dynamic';

// Dynamically load the client component without SSR
const MealsPage = dynamic(() => import('./MealsPage'), { ssr: false });

export const metadata = {
  title: "All Meals",
  description: "Meals Loaded from MealDB Api",
};

export default function Meals() {
  return <MealsPage></MealsPage>
}
