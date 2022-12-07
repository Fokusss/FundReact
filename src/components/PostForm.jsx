import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {

  const [post, setPost] = useState({title: '', text: ''})

  const addPost = (e) => {
    e.preventDefault();
    const newPost = {...post, id: Date.now()}
    create(newPost);
    setPost({title: '', text: ''})
  }

  return (
    <form>
        <MyInput type='text' value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} placeholder='Заголовок' />
        <MyInput type='text' value={post.text} onChange={(e) => setPost({...post, text: e.target.value})} placeholder='Текст' />
        <MyButton type='submit' onClick={(e) => addPost(e)} >Добавить пост</MyButton>
      </form>
  )
}

export default PostForm;