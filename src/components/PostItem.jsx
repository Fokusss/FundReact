import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const {...post} = props.post;

  return (
    <article className="post">
      <div>
        <h2 className="title">{props.number}. {post.title}</h2>
        <p className="description">{post.body}</p>
      </div>
      <MyButton onClick={() => {props.remove(props.post)}}>Удалить</MyButton>
    </article>
  )
}

export default PostItem;