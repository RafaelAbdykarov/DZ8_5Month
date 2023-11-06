import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditPostForm from './editpostForm';
import { updatePost } from '../action/postsSlice';
import '../style/postList.css'

const PostList = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const [editingPostId, setEditingPostId] = useState(null);

    const handleEditClick = (postId) => {
        setEditingPostId(postId);
    };

    const handleSave = (postId, updatedTitle, updatedContent) => {
        dispatch(updatePost({ id: postId, title: updatedTitle, content: updatedContent }));
        setEditingPostId(null);
    };

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <button onClick={() => handleEditClick(post.id)}>Редактировать</button>
                    {editingPostId === post.id && (
                        <EditPostForm
                            postId={post.id}
                            currentTitle={post.title}
                            currentContent={post.content}
                            onSave={handleSave}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default PostList;
