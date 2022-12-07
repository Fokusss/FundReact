import { useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
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

  const createPost = (post) => {
    setPosts([...posts, post]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const [selectSort, setSelectSort] = useState('');

  const sortPosts = (sort) => {
    setSelectSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  } 

  const [search, setSearch] = useState('');

  return (
    <div>
      <PostForm create={createPost} />
      <MyInput type='text' placeholder='Поиск' value={search} onChange={(e) => setSearch(e.target.value)} />
      <MySelect
        options={[
          {value: 'title', name: 'По заголовку' },
          {value: 'text', name: 'По тексту'}
        ]}
        defaultValue='Сортировка'
        value={selectSort}
        onChange={sortPosts}
      />
      {posts.length !== 0
        ?
        <PostList posts={posts} remove={removePost} title='Посты' />
        :
        <h2 style={{ textAlign: 'center' }}>Посты не найдены!</h2>
      }
    </div>
  )
}

export default App;
