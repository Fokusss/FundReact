import { useMemo, useState } from "react";
import Counter from "./components/Counter";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyModal from "./components/UI/MyModal/MyModal";
import MySelect from "./components/UI/select/MySelect";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JName', text: 'FТекст' },
    { id: 2, title: 'GName', text: 'GТекст' },
    { id: 3, title: 'FName', text: 'AТекст' },
    { id: 4, title: 'LName', text: 'SТекст' },
    { id: 5, title: 'TName', text: 'YТекст' },
    { id: 6, title: 'AName', text: 'PТекст' },
    { id: 7, title: 'BName', text: 'YТекст' },
  ])

  const [filter, setFilter] = useState({ sort: '', searchQuery: '' });
  const [modal, setModal] = useState(false);



  const sortedPosts = useMemo(() => {
    console.log('Отработала функция getSortedPosts')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts]);

  const searchAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.searchQuery.toLowerCase()))
  }, [filter.searchQuery, sortedPosts])

  const createPost = (post) => {
    setPosts([...posts, post]);
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
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
      <PostList posts={searchAndSortedPosts} remove={removePost} title='Посты' />

    </div>
  )
}

export default App;
