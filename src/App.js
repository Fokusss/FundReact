import { useMemo, useState } from "react";
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
  const [selectSort, setSelectSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');



  const sortedPosts = useMemo(() => {
    console.log('Отработала функция getSortedPosts')
    if (selectSort) {
      return [...posts].sort((a, b) => a[selectSort].localeCompare(b[selectSort]))
    }
    return posts
  }, [selectSort, posts]);

  const searchAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  const createPost = (post) => {
    setPosts([...posts, post]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div>
      <PostForm create={createPost} />
      <MyInput type='text' placeholder='Поиск' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <MySelect
        options={[
          { value: 'title', name: 'По заголовку' },
          { value: 'text', name: 'По тексту' }
        ]}
        defaultValue='Сортировка'
        value={selectSort}
        change={setSelectSort}
      />
      {searchAndSortedPosts.length !== 0
        ?
        <PostList posts={searchAndSortedPosts} remove={removePost} title='Посты' />
        :
        <h2 style={{ textAlign: 'center' }}>Посты не найдены!</h2>
      }
    </div>
  )
}

export default App;
