import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, title, content }) => {
    const response = await axios.put(`https://dummyjson.com/auth/posts/${id}`, { title, content });
    return response.data;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updatePost.fulfilled, (state, action) => {
            // Обновляем пост в сторе после успешного ответа от API
            const updatedPost = action.payload;
            return state.map((post) => (post.id === updatedPost.id ? updatedPost : post));
        });
    },
});

export default postsSlice.reducer;
