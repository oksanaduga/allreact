import React from "react";
import MyButton from './ui/button/MyButton'
import '../styles/App.scss'

const PostItem = function ({post, remove}) {
	return (
		<div className='post'>
			<div className='post__content'>
				<strong>{post.id} {post.title}</strong>
				<div>
					{post.body}
				</div>
			</div>
			<div classNames='post__btns'>
				<MyButton onClick={() => remove(post)}>Delete</MyButton>
			</div>
	</div>
	)
}

export default PostItem