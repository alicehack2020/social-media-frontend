import React from "react";
import Stories from "../components/Stories";
import Post from "../components/Post";
import AddPost from "../components/AddPost";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Stories />
      <AddPost />
      <Post />
    </div>
  );
};
