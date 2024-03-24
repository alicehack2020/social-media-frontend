import React from "react";
import Comments from "./Comments";
import icon from "../assets/react.svg";
const PostCard = ({ post }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div>
        <img
          className="w-full"
          src={post?.img ?? icon}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 ">{post?.name}</div>
          <p className="text-gray-700 text-base">{post?.desc}</p>
        </div>

        <Comments />
      </div>
    </div>
  );
};

export default PostCard;
