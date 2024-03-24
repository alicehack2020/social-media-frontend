import { useQuery } from "@tanstack/react-query";
import React from "react";
import { makeRequest } from "../axios";

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
      {JSON.stringify(data)}
    </div>
  );
};

export default Post;
