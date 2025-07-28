

import React from 'react'
import { getProducts } from '../actions/products/getProducts';


// export const dynamic = "force-dynamic";

export default async function page() {
    // const res = await fetch('https://nextjs-app-smoky-omega.vercel.app');
    // const data = await res.json();
  const data = await getProducts();
   console.log(data)
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
