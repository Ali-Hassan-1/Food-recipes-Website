import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Post.css";

const Post = ({ username, imageUrl, caption }) => {
  return (
    <div className="post">
      {/* header -> avatar + username */}
      <div className="post__header">
        <Avatar className="post__avatar" alt="Ali" src="" />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="Car" />
      {/* imgae */}
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      {/* username + caption */}
    </div>
  );
};

export default Post;
