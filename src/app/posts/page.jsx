import Link from "next/link";
import React from "react";
import style from "./post.module.css";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};
export const metadata = {
  title: "All Posts | NextJs Posts",
  description: "Generated JSON Placeholder Posts",
};
 
export default async function page() {
  const posts = await getPosts();
  return (
    <div className="gap-8 grid grid-cols-4">
      {posts?.map((post) => {
        return (
          <div key={post?.id}>
            <p className={`${style["post-title"]}`}>{post?.title}</p>
            <p className="mb-3">{post.body}</p>
            <Link
              className="bg-amber-500 p-2 rounded-lg text-black"
              href={`/posts/${post?.id}`}
            >
              Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}
