"use client";
import React from "react";
import Post from "@/components/Post";

function Home(): React.ReactElement {
  let posts: Array<{ title: string; body: string }> = [
    {
      title: "Javascript",
      body: "Javascript is used for frontend frameworks and Node.js",
    },
    {
      title: "Typescript",
      body: "Typescript is a superset of javascript that has types",
    },
    {
      title: "React",
      body: "React is a frontend framework that uses Javascript",
    },
    {
      title: "Next.js",
      body: "Next.js is a superset of React that supports SSR",
    },
  ];

  return (
    <React.Fragment>
      <Post posts={posts} />
    </React.Fragment>
  );
}

export default Home;
