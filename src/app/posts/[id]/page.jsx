import React from "react";
export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const id = (await params).id;
  const singlePost = await getSinglePost(id);
  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}

export default async function page({ params }) {
  const p = await params;
  const singlePost = await getSinglePost(p.id);
  return (
    <div>
      <p>SinglePage: {JSON.stringify(singlePost)}</p>
      <p>{singlePost.title}</p>
      <p>{singlePost.body}</p>
    </div>
  );
}
