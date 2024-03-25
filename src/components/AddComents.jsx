import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { makeRequest } from "../axios";

const AddComments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newPost) => makeRequest.post("/comments", newPost),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
  const handleClick = () => {
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="shadow-md p-1 shadow-gray-400 flex justify-between">
      <div>
        <input
          type="text"
          name="comment"
          id=""
          value={desc}
          className="p-1 border border-gray-400 outline-none"
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className="border border-red-950 p-2" onClick={handleClick}>
          add comment
        </button>
      </div>
    </div>
  );
};

export default AddComments;
