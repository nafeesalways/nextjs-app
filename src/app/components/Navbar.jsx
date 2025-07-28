"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname.includes("dashboard"));

  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="flex justify-center">
          <ul className="flex justify-center gap-8">
            <Link href="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link href="/posts">
              {" "}
              <li>Posts</li>
            </Link>
            <Link href="/products">
              <li>Products</li>
            </Link>
            <Link href="/meals">Meals</Link>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <></>;
  }
}
