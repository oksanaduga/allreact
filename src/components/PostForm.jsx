import React, {useState} from "react";
import MyButton from './ui/button/MyButton'
import MyInput from './ui/input/MyInput'
import '../styles/App.scss'

const PostForm = function ({create}) {
	const [post, setPost] = useState({ title: '', body: '' })

	const createPost = (e) => {
    e.preventDefault()
		const newPost = {
			...post,
			id: Date.now()
		}
		create(newPost)
    setPost({ title: '', body: '' })
  }

	return (
		<form>
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type='text'
          placeholder='title'
        />
        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type='text'
          placeholder='content'
        />
        <MyButton onClick={createPost} >Create</MyButton>
      </form>
	)
}

export default PostForm