import React, { useState, useRef } from "react";
// import Counter from './components/Counter'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/ui/select/MySelect'
import './styles/App.scss'

// /Users/oksanaduga/projects/allreact/src/components/Counter.jsx

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'asd', body: '11'},
    {id: 2, title: 'dgfd', body: '222'},
    {id: 3, title: 'sd', body: '333'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <hr style={{ margin: '15px 0' }}/>
      <MySelect
        defaultValue='Sort by'
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By description' },
        ]}
      />
      {posts.length !== 0
          ?
          <PostList remove={removePost} posts={posts} title={'first'}/>
          :
          <h1 style={{ textAlign: 'center' }}>
            No posts
          </h1>
      }
    </div>
  );
}

export default App;
