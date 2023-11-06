import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import PostList from './components/postList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={PostList} />
            </Routes>
        </Router>
    );
};

export default App;
