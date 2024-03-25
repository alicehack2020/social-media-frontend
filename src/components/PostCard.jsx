import React, { useState } from "react";
import Comments from "./Comments";
const PostCard = ({ post }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div>
        {post.img && <img className="h-30 w-30" src={post?.img} alt=" " />}

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 ">{post?.name}</div>
          <p className="text-gray-700 text-base">{post?.desc}</p>
        </div>

        <div>
          <div
            className="p-1 border border-red-700 cursor-pointer"
            onClick={() => setIsCommentOpen(!isCommentOpen)}
          >
            <span>open comments</span>
          </div>

          {isCommentOpen && <Comments postId={post.id} />}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
