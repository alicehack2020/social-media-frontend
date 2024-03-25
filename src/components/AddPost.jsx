import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { makeRequest } from "../axios";

const AddPost = () => {
  const queryClient = useQueryClient();
  const [file, setFile] = useState(null);
  const [postData, setPostData] = useState(null);

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  // Mutations
  const mutation = useMutation({
    mutationFn: (newPost) => makeRequest.post("/posts", newPost),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const postHadle = async (e) => {
    e.preventDefault();
    let imgUrl = "";

    if (file) imgUrl = await upload();

    mutation.mutate({
      desc: postData.desc,
      img: imgUrl,
    });
    setDesc(null);
    setFile(null);
  };

  return (
    <div className="shadow-md p-1 shadow-gray-400">
      <input
        type="text"
        name="desc"
        id=""
        className="p-1 border border-gray-400 outline-none"
        onChange={inputHandle}
      />
      <input
        type="file"
        name="img"
        className="p-1"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="border border-red-950 p-2" onClick={postHadle}>
        add Post
      </button>
    </div>
  );
};

export default AddPost;
