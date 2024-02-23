"use client";
import React, { useState } from "react";
import Post from "@/components/Post";
import Parent from "@/components/Parent";
import Child from "@/components/Child";
import SecondChild from "@/components/SecondChild";
import toast, { Toaster } from "react-hot-toast";
function Home(): React.ReactElement {
  const [child, setChild] = useState(<Child />);
  const [name, setName] = useState("");

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

  const toggleChild = () => {
    if (child.type == Child) {
      setChild(<SecondChild />);
    } else {
      setChild(<Child />);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast(`Hello ${name} !`, {
      duration: 3000,
      icon: "👋",
      style: {
        background: "#333",
        color: "#fff",
        borderRadius: "25rem",
        padding: "1rem",
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <React.Fragment>
      {/* <Post posts={posts} /> */}

      {/* <Parent>
        <button
          onClick={() => toggleChild()}
          className="bg-blue-600 text-white p-3 rounded-full border-2 my-5 border-black hover:bg-blue-800"
        >
          Toggle Children
        </button>
        <h2 className="text-red-500 text-3xl font-semibold">{child}</h2>
      </Parent> */}

      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-black p-2 w-full"
          onChange={handleChange}
          value={name}
          type="text"
          placeholder="Enter your name"
        />
        <br />
        <button
          className="border-2 border-black p-1 py-2 rounded-[25rem] w-full mt-5 bg-green-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}

export default Home;
