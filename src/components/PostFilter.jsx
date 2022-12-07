import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

/* {filter.searchQuerye: e.target.value}*/
/* setfilter.sort*/

const PostFilter = ({filter, setFilter}) => {
  return (
    <> 
      <MyInput type='text' placeholder='Поиск' value={filter.searchQuery} onChange={(e) => setFilter({...filter, searchQuery: e.target.value})} />
      <MySelect
        options={[
          { value: 'title', name: 'По заголовку' },
          { value: 'text', name: 'По тексту' }
        ]}
        defaultValue='Сортировка'
        value={filter.sort}
        change={(a) => setFilter({...filter, sort: a})}
      />
    </>
  )
}

export default PostFilter;