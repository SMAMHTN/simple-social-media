import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import Users from './pages/Users';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/posts'} replace />} />
      <Route path='simple-social-media/posts' element={<Outlet />}>
        <Route path=':postId' element={<PostDetail />} />
        <Route index element={<Posts />} />
      </Route>
      <Route path='simple-social-media/users' element={<Users />} />
      <Route path='simple-social-media/about' element={<About />} />
    </Routes>
  );
}

export default App;
