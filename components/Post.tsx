import React from "react";
import { PostProps } from "@/types/types";

function Post(props: PostProps): React.ReactElement {
  return (
    <React.Fragment>
      {props.posts.map((post, index) => {
        return (
          <div
            key={index}
            className="bg-slate-100 w-[50%] text-center my-[1rem] border border-black rounded-lg p-4 shadow-2xl"
          >
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="text-lg">{post.body}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Post;
