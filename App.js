import React from 'react';
import Home from './Home';
import Quiz from './Quiz';
import Terms from './Terms';
import Videos from './Videos';
import Login from './Login';
import Register from './Register';
import Study from './Study';
import News from './News';
import Profile from './Profile';
import Search from './Search';
import Dev from './Dev';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Dev />} />
        <Route path="/quiz" element={<Quiz />} /> 
        <Route path="/terms" element={<Terms />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/study" element={<Study />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;