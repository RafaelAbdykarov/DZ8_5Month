import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../action/postsSlice';
import '../style/editpostForm.css'

const EditPostForm = ({ postId, currentTitle, currentContent }) => {
    const [title, setTitle] = useState(currentTitle);
    const [content, setContent] = useState(currentContent);
    const dispatch = useDispatch();

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

    const handleSave = () => {
        // Отправка запроса на обновление поста к API
        dispatch(updatePost({ id: postId, title, content }));
    };

    return (
        <div>
            <input type="text" value={title} onChange={handleTitleChange} />
            <textarea value={content} onChange={handleContentChange} />
            <button onClick={handleSave}>Сохранить</button>
        </div>
    );
};

export default EditPostForm;
