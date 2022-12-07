import { useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Name', text: 'Текст' },
    { id: 2, title: 'Name', text: 'Текст' },
    { id: 3, title: 'Name', text: 'Текст' },
    { id: 4, title: 'Name', text: 'Текст' },
    { id: 5, title: 'Name', text: 'Текст' },
    { id: 6, title: 'Name', text: 'Текст' },
    { id: 7, title: 'Name', text: 'Текст' },
  ])

  

  const createPost = (post) => {
    setPosts([...posts, post]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div>
      <PostForm create={createPost}/>
      {posts.length !== 0 
      ? 
      <PostList posts={posts} remove={removePost} title='Посты' />
      : 
      <h2 style={{textAlign: 'center'}}>Посты не найдены!</h2>
      }
    </div>
  )
}

export default App;
