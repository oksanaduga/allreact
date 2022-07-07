import React, { useState, useEffect } from "react";
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/ui/MyModal/MyModal'
import '../styles/App.scss'
import MyButton from "../components/ui/button/MyButton";
import Loader from "../components/ui/Loader/Loader";

import { usePosts } from '../hooks/usePosts';
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";

import { getPageCount } from "../utils/pages";
import Pagination from "../components/ui/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([ ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  const sortedAndSurchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <div className='App'>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{ margin: '15px 0' }}/>
      <div>
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      {postError &&
        <h1>{`Something go wrong: ${postError }`}</h1>
      }
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSurchedPosts} title={'first'}/>
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
