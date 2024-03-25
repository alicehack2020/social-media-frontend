import { useQuery } from "@tanstack/react-query";
import React from "react";
import { makeRequest } from "../axios";
import AddComments from "./AddComents";

const Comments = ({ postId }) => {
  const { isloading, error, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      makeRequest.get("/comments?postId=" + postId).then((res) => res.data),
  });

  if (isloading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>comments...</h1>
      <AddComments postId={postId} />
      {data?.map((comment) => (
        <h1>{comment.desc}</h1>
      ))}
    </div>
  );
};

export default Comments;
