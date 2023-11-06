import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './action/postsSlice';
import App from './App';

const store = configureStore({
    reducer: rootReducer,
});

const root = document.getElementById('root');

const reactRoot = createRoot(root);
reactRoot.render(
    <Provider store={store}>
        <App />
    </Provider>
);
