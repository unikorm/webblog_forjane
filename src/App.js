
import './App.css';
import Header from "../src/components/Header";
import Head from './components/Head';
import BlogList from './components/BlogList';
import FullArticle from './pages/FullArticle';
import Footer from './components/Footer';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  return (
    <Router>
    <React.Fragment>
      <Header />
      <Head />
      <Routes>
          <Route path="/"  element={<BlogList />} />
          <Route path="/:title" element={<FullArticle />} />
        </Routes>
      <Footer />
    </React.Fragment>
    </Router>
  );
};

export default App;
