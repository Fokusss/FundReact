import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {

  if (posts.length === 0) {
    return (
      <h2 style={{ textAlign: 'center' }}>Посты не найдены!</h2>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: 10 }}>{title}</h1>
      <TransitionGroup>
        {posts.map((onePost, index) =>
          <CSSTransition key={onePost.id} timeout={500} classNames='post'>
            <PostItem number={index + 1} post={onePost} remove={remove} key={onePost.id} />
          </CSSTransition>
        )}

      </TransitionGroup>
    </div>
  )
}

export default PostList;