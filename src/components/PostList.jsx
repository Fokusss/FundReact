import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: 10}}>{title}</h1>
      {posts.map((onePost, index) => 
        <PostItem number={index + 1} post={onePost} remove={remove} key={onePost.id}/>)}
    </div>
  )
}

export default PostList;