import { useQuery } from "@tanstack/react-query";
import React from "react";
import { makeRequest } from "../axios";
import PostCard from "./PostCard";

const Post = () => {
  const { isloading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => makeRequest.get("/posts").then((res) => res.data),
  });

  if (isloading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>Posts</h1>
      {data?.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default Post;
