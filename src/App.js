
import './App.css';
import Header from "../src/components/Header";
import Contacts from "../src/pages/Contacts";
import Head from './components/Head';
import BlogList from './components/BlogList';
import FullArticle from './pages/FullArticle';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const routesWithoutHead = ["/about-me", "/contacts"];
  const hideHead = routesWithoutHead.includes(location.pathname);

  return (
    <React.Fragment>
      <Header />
      {!hideHead && <Head />}
      <Routes>
          <Route path="/"  element={<BlogList />} />
          <Route path="/:title" element={<FullArticle />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
