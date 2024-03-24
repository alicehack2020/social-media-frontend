import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

const AddPost = () => {
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: (newPost) => makeRequest.post("/posts", newPost),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const postHadle = () => {
    mutation.mutate({
      desc: "new post",
    });
  };

  return (
    <div>
      <h1></h1>
      <button className="border border-red-950 p-2" onClick={postHadle}>
        add Post
      </button>
    </div>
  );
};

export default AddPost;
