import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import PostService from "./API/PostService";
import Counter from "./components/Counter";
import { usePosts } from "./components/hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import Loader from "./components/UI/Loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";
import MySelect from "./components/UI/select/MySelect";


function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', searchQuery: '' });
  const [modal, setModal] = useState(false);
  const [isPostsLoading, setPostsLoading] = useState(false)

  const searchAndSortedPosts = usePosts(posts, filter.sort, filter.searchQuery);


  const createPost = (post) => {
    setPosts([...posts, post]);
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  useEffect(() => {
    fetshPosts()
  }
  
  , []);

  async function fetshPosts() {
    setPostsLoading(true)
    setTimeout(async () => {
      const posts = await PostService.getAll();
    console.log(posts)
    setPosts(posts)
    setPostsLoading(false)
    }, 1000)
  } 

  return (
    <div>
      <MyButton onClick={() => setModal(true)}>
        Добавить пользователя
      </MyButton>
      <MyModal visable={modal} setVisable={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {
        isPostsLoading 
        ? <div style={{display: 'flex', display: 'flex',justifyContent: 'center',marginTop: 20}}><Loader/></div> 
        : <PostList posts={searchAndSortedPosts} remove={removePost} title='Посты' />
      }

    </div>
  )
}

export default App;
